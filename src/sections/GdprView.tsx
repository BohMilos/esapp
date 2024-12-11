// src/sections/GdprView.tsx

"use client";

import { Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function GdprView(){
    return (
        <Container>
        <Typography variant="h4" component="h1" gutterBottom>
            GDPR - Ochrana osobných údajov
        </Typography>
        <Typography variant="body1" gutterBottom>
            Vaša ochrana súkromia je pre nás veľmi dôležitá. V tomto dokumente sa dozviete, ako spracúvame a chránime vaše osobné údaje v súlade s nariadením GDPR.
        </Typography>
        <Typography variant="h4" sx={{ mt: 1.5 }}>
            Zodpovednosť
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Všetky osobné údaje, ktoré nám poskytnete, budú použité iba na účely, na ktoré boli poskytnuté.
        </Typography>
        <Typography variant="h4" sx={{ mt: 1.5 }}>
            Práva užívateľov
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Máte právo na prístup k svojim údajom, ich úpravu alebo vymazanie. Kontaktujte nás na emailovej adrese support@snapzoska.sk.
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Ďakujeme, že dodržiavate podmienky používania našej aplikácie.
        </Typography>
        <Button variant="outlined" href="/auth/registracia" startIcon={<ArrowBackIcon/> }>
            Späť
        </Button>
      </Container>
    )
}