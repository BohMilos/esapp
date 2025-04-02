// src/app/(private)/pridat/page.tsx

import NewPostForm from "@/components/NewPostForm";
import { Typography, Box, Container } from "@mui/material";

export const metadata = {
  title: "Nový príspevok | SnapZoška",
};

export default function NewPostPage() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        mb: 8,
        padding: 2,
      }}>
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
        }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}>
          Vytvoriť nový príspevok
        </Typography>
      </Box>
      <NewPostForm />
    </Container>
  );
}
