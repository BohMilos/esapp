// src/app/(private)/prispevok/[prispevokId]/komentar/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";

export const metadata = { title: "Zoznam komentárov | SnapZoška" };

export default function CommentsList() {
  return(
    <Container>
      <Typography>Zoznam komentárov</Typography>
    </Container>
  );
}