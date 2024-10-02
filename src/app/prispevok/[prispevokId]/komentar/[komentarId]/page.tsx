// src/app/prispevok/[prispevokId]/komentar/[komentarId]]page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";

export const metadata = { title: "Komentár príspevku | SnapZoška" };

export default function PostCommentDetail({params} : {params : {prispevokId : string, komentarId : string}}) {

  return(
    <Container>
      <Typography>Komentár {params.komentarId} príspevku {params.prispevokId} </Typography>
      <Typography> Príspevok číslo: {params.prispevokId} a k nemu priradený komentár číslo: {params.komentarId}</Typography>
    </Container>
  );
}