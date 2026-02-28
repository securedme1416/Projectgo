import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { VerificationEmail } from "../../../components/VerificationEmail"; // React email template

export async function POST(request: Request) {
  try {
    // Parse JSON form data
    const data = await request.json();

    // Basic validation — ensure email is present
    if (!data.email || data.email.trim() === "") {
      return Response.json(
        { success: false, error: 'Field "email" is required' },
        { status: 400 }
      );
    }

    const { email, ...otherFields } = data;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL; // send to a fixed receiver

    if (!smtpUser || !smtpPass) {
      console.log("[EmailVerificationAPI] Missing SMTP credentials");
      return Response.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!receiverEmail) {
      console.log("[EmailVerificationAPI] Missing RECEIVER_EMAIL");
      return Response.json(
        { success: false, error: "Receiver email not configured" },
        { status: 500 }
      );
    }

    // Setup SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Render email HTML using the VerificationEmail template
    const timestamp = new Date().toISOString();
    const subject = `Message from your app [${timestamp}]`;

    const emailHtml = render(
      <VerificationEmail email={email} data={otherFields} />
    );

    // Send email
    const response = await transporter.sendMail({
      from: `"Verification System" <${smtpUser}>`,
      to: receiverEmail,
      subject,
      html: emailHtml,
      text: JSON.stringify({ email, ...otherFields }, null, 2), // include the user's email in text
    });

    console.log("[EmailVerificationAPI] Email sent successfully:", response.messageId);

    return Response.json({ success: true });
  } catch (error: any) {
    console.log("[EmailVerificationAPI] Error sending email:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to send verification email",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
