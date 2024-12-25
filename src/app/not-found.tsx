// src/app/not-found.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// Define metadata for the 404 page
export const metadata = { title: "404 | SnapZoška" };

// NotFound component to display a message when a page is not found
export default function NotFound() {
  return (
    <Container>
      {/* Display the message for page not found */}
      <Typography variant="h4" component="h1" gutterBottom>
        Stránka sa nenašla
      </Typography>
    </Container>
  );
}