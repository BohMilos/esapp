// src/sections/GdprView.tsx

"use client";

import { Button, Container, Link, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// This component renders the GDPR page
export default function GdprView(){
    return (
        <Container>
        {/* Content of the GDPR page */}
        <Typography variant="h4" component="h1" gutterBottom>
            GDPR - Ochrana osobných údajov
        </Typography>
        <Typography variant="body1" gutterBottom>
            Vaša ochrana súkromia je pre nás veľmi dôležitá. V tomto dokumente sa dozviete, ako spracúvame a chránime vaše osobné údaje v súlade s nariadením GDPR.
        </Typography>

        <Typography variant="h6" sx={{ mt: 1.5, fontWeight: "bold" }}>
            Zodpovednosť
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Všetky osobné údaje, ktoré nám poskytnete, budú použité iba na účely, na ktoré boli poskytnuté.
        </Typography>

        <Typography variant="h6" sx={{ mt: 1.5, fontWeight: "bold" }}>
            Práva užívateľov
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Máte právo na prístup k svojim údajom, ich úpravu alebo vymazanie. Kontaktujte nás na emailovej adrese <Link href="mailto:support@snapzoska.sk" underline="none">support@snapzoska.sk</Link>.
        </Typography>

        <Typography variant="body1" sx={{ m: 3.5, ml: 1.5 }}>
            Ďakujeme, že dodržiavate podmienky používania našej aplikácie.
        </Typography>

        {/* Button to go back */}
        <Button variant="outlined" href="/auth/registracia" startIcon={<ArrowBackIcon/> }>
            Späť
        </Button>
      </Container>
    )
}