/**
 * Contact form API – sends email via Resend.
 * Set RESEND_API_KEY in Vercel (Project → Settings → Environment Variables).
 */
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
  hp?: unknown;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function trimString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim();
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const hp = trimString(body.hp);
  if (hp) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = trimString(body.name);
  const email = trimString(body.email);
  const message = trimString(body.message);
  const company = trimString(body.company) || undefined;

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { ok: false, error: "Name must be 2–80 characters" },
      { status: 400 }
    );
  }
  if (email.length > 120 || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 }
    );
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Message must be 10–5000 characters" },
      { status: 400 }
    );
  }
  if (company && company.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Company must be max 120 characters" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "RESEND_API_KEY missing (set .env.local locally and Vercel env in prod)",
      },
      { status: 500 }
    );
  }

  const toEmail =
    process.env.CONTACT_TO_EMAIL && process.env.CONTACT_TO_EMAIL.trim().length > 0
      ? process.env.CONTACT_TO_EMAIL.trim()
      : "m@stormsolutions.io";

  const subject = `Aksellor – Kontakt: ${name} (${company ?? "no company"})`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Aksellor <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject,
      text,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email via Resend", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}

