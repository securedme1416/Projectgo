import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { VerificationEmail } from "../../../components/email-templates/VerificationEmail"; // React email template for verification

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (!email || !password) {
      return Response.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = email; // send directly to user email

    if (!smtpUser || !smtpPass) {
      console.log("[EmailVerificationAPI] Missing SMTP credentials");
      return Response.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Generate a verification code (e.g., 6-digit)
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    const subject = `Your Verification Code`;
    const emailHtml = render(
      <VerificationEmail email={email} code={verificationCode} />
    );

    // Send email
    const response = await transporter.sendMail({
      from: `"Verification System" <${smtpUser}>`,
      to: receiverEmail,
      subject,
      html: emailHtml,
      text: `Your verification code is: ${verificationCode}`,
    });

    console.log("[EmailVerificationAPI] Email sent successfully:", response.messageId);

    // Optionally: store verificationCode in DB or in-memory store to validate later
    // Example: save to Redis or temporary DB table with email and code

    return Response.json({ success: true, verificationCode });
  } catch (error: any) {
    console.log("[EmailVerificationAPI] Error sending email:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to send verification code",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
