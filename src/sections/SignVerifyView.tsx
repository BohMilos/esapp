// src/sections/SignVerifyView.tsx

"use client";

import { useState } from "react";
import { Container, TextField, Typography, Button } from "@mui/material";

export default function SignVerifyView() {
  const [verificationCode, setVerificationCode] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setVerificationCode(value);
    }
  };

  const handleVerify = () => {
    console.log("Verification code entered:", verificationCode);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Overte svoj účet
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Zadajte 6-miestny kód, ktorý sme vám poslali na email.
      </Typography>

      <TextField
        label="Overovací kód"
        type="text"
        value={verificationCode}
        onChange={handleChange}
        inputProps={{ maxLength: 6, pattern: "[0-9]*" }}
        sx={{ mb: 3 }}
        fullWidth
      />

      <Button variant="contained" onClick={handleVerify} fullWidth>
        Overiť
      </Button>
    </Container>
  );
}