// src/app/not-found.tsx

import { Container, Typography } from "@mui/material";

export const metadata = { title: '404 | SnapZoška' };

export default function Home() {
    return (
      <Container>
      {/* Display the message for page not found */}
      <Typography variant="h4" component="h1" gutterBottom>
        Stránka sa nenašla
      </Typography>
    </Container>
    );
}