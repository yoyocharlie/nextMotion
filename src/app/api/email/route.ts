"use server";

import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

/* 
This route handler uses nodemailer to send your user's message to your email address.
You can read more about nodemailer here: https://www.npmjs.com/package/nodemailer
*/

const emailSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: NextRequest) {
  let body = "";
  const reader = request.body?.getReader();
  if (reader) {
    const { value } = await reader.read();
    body = new TextDecoder("utf-8").decode(value);
  }

  try {
    const parsedBody = emailSchema.parse(JSON.parse(body));

    const { email, name, message } = parsedBody;

    const transport = nodemailer.createTransport({
      // You can use a different service, you'll just need to reconfigure this transport
      // and setup proper env variables.

      // The password will not be your actual email password, rather an "application" password that you'll
      // set up through Google here https://myaccount.google.com/apppasswords
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    await transport.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `From Portfolio: ${name} <${email}>`,
      html: message,
    });

    return NextResponse.json({ success: "Email sent successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
