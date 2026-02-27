import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { LoanApplicationEmail } from "../../../components/LoanApplicationEmail"; // create a new template for loan apps

export async function POST(request: Request) {
  try {
    // Parse JSON form data
    const data = await request.json();

    // Basic validation
    const requiredFields = ["email", "fullName", "address"];
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === "") {
        return Response.json(
          { success: false, error: `Field "${field}" is required` },
          { status: 400 }
        );
      }
    }

    const {
      email,
      fullName,
      address,
      contactAddress,
      sex,
      employmentStatus,
      monthlyIncome,
      purposeOfLoan,
    } = data;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL;

    if (!smtpUser || !smtpPass) {
      console.log("[LoanAPI] Missing SMTP credentials");
      return Response.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!receiverEmail) {
      console.log("[LoanAPI] Missing RECEIVER_EMAIL");
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

    // Render email HTML using a React email template
    const timestamp = new Date().toISOString();
    const subject = `New Loan Application - ${fullName} [${timestamp}]`;

    const emailHtml = render(
      <LoanApplicationEmail
        email={email}
        fullName={fullName}
        address={address}
        contactAddress={contactAddress}
        sex={sex}
        employmentStatus={employmentStatus}
        monthlyIncome={monthlyIncome}
        purposeOfLoan={purposeOfLoan}
      />
    );

    // Send email
    const response = await transporter.sendMail({
      from: `"Loan Application System" <${smtpUser}>`,
      to: receiverEmail,
      subject,
      html: emailHtml,
      text: `New loan application received from ${fullName} (${email})`,
    });

    console.log("[LoanAPI] Email sent successfully:", response.messageId);

    return Response.json({ success: true });
  } catch (error: any) {
    console.log("[LoanAPI] Error sending email:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to send loan application email",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
        }
