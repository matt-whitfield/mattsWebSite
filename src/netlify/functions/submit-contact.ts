import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { 'g-recaptcha-response': token, ...fields } = await req.json();
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // 1. Verify reCAPTCHA
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`
  });
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return new Response(JSON.stringify({ error: 'reCAPTCHA failed' }), { status: 400 });
  }

  // 2. Forward to Netlify Forms
  const formData = new URLSearchParams();
  formData.append('form-name', 'contact');
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  const netlifyRes = await fetch('https://mattwhitfield.xyz/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString(),
  });

  if (!netlifyRes.ok) {
    return new Response(JSON.stringify({ error: 'Form submission failed' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};