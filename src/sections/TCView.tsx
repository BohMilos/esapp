// src/sections/TCView.tsx

"use client";

import { Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// This component renders the Terms and Conditions page
export default function TCView(){
    return (
        <Container>
        {/* Content of the Terms and Conditions page */}
        <Typography variant="h4" component="h1" gutterBottom>
            Podmienky používania
        </Typography>
        <Typography variant="body1" gutterBottom>
            Tieto podmienky upravujú používanie aplikácie SnapZoška. Pred použitím našej aplikácie si prosím dôkladne prečítajte tieto podmienky.
        </Typography>

        <Typography variant="h6" sx={{ mt: 1.5, fontWeight: "bold" }}>
            Používanie aplikácie
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Užívateľ sa zaväzuje používať aplikáciu v súlade so zákonmi a dobrými mravmi.
        </Typography>

        <Typography variant="h6" sx={{ mt: 1.5, fontWeight: "bold" }}>
            Ochrana údajov
        </Typography>
        <Typography variant="body1" sx={{ m: 1.5 }}>
            Vaše údaje sú spracovávané v súlade s našimi zásadami ochrany osobných údajov.
        </Typography>
        <Typography variant="body1" sx={{ m: 3, ml: 1.5 }}>
            Viac informácií nájdete v našich Podmienkach používania.
        </Typography>

        {/* Button to go back */}
        <Button variant="outlined" href="/auth/registracia" startIcon={<ArrowBackIcon/>}>
            Späť
        </Button>
      </Container>
    )
}