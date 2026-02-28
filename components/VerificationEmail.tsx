// components/VerificationEmail.tsx
import React from "react";

interface Props {
  email: string;
  data: Record<string, any>; // all other form fields
}

export const VerificationEmail = ({ email, data }: Props) => (
  <div style={{ fontFamily: "sans-serif", lineHeight: 1.5 }}>
    <h2>New Email Submission</h2>
    <p><strong>From:</strong> {email}</p>

    <div style={{ marginTop: "12px" }}>
      {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {value || "N/A"}
        </p>
      ))}
    </div>

    <p style={{ marginTop: "16px" }}>
      This message contains all the information submitted from the frontend form.
    </p>
  </div>
);
