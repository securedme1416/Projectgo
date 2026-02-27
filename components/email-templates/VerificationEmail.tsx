// components/email-templates/VerificationEmail.tsx
import React from "react";

interface Props {
  email: string;
  code: string;
}

export const VerificationEmail = ({ email, code }: Props) => (
  <div style={{ fontFamily: "sans-serif", lineHeight: 1.5 }}>
    <h2>Email Verification</h2>
    <p>Hello {email},</p>
    <p>Your verification code is:</p>
    <h1 style={{ fontSize: "24px", color: "#1D4ED8" }}>{code}</h1>
    <p>Please use this code to complete your email verification.</p>
  </div>
);
