// src/app/prispevok/[postId]/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const metadata = { title: "Detail príspevku | SnapZoška" };

export default function PostDetails({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;

  return (
    <Container>
      <Button
        variant="outlined"
        href="/prispevok"
        startIcon={<ArrowBackIcon />}
      >
        Späť
      </Button>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Detail príspevku {postId}
      </Typography>
    </Container>
  );
}
