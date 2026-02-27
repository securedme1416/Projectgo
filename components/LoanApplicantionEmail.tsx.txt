// components/email-templates/LoanApplicationEmail.tsx
import React from "react";

interface Props {
  email: string;
  fullName: string;
  address: string;
  contactAddress?: string;
  sex?: string;
  employmentStatus?: string;
  monthlyIncome?: string;
  purposeOfLoan?: string;
}

export const LoanApplicationEmail = ({
  email,
  fullName,
  address,
  contactAddress,
  sex,
  employmentStatus,
  monthlyIncome,
  purposeOfLoan,
}: Props) => (
  <div style={{ fontFamily: "sans-serif", lineHeight: 1.5 }}>
    <h2>New Loan Application</h2>
    <p><strong>Name:</strong> {fullName}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Address:</strong> {address}</p>
    <p><strong>Contact Address:</strong> {contactAddress || "N/A"}</p>
    <p><strong>Sex:</strong> {sex || "N/A"}</p>
    <p><strong>Employment Status:</strong> {employmentStatus || "N/A"}</p>
    <p><strong>Monthly Income:</strong> {monthlyIncome || "N/A"}</p>
    <p><strong>Purpose of Loan:</strong> {purposeOfLoan || "N/A"}</p>
  </div>
);
