// src/app/(private)/prispevok/[prispevokId]/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";

export const metadata = { title: "Detail príspevku | SnapZoška" };

export default function PostDetail({params} : {params : {prispevokId : string}}) {
  return(
    <Container>
      <Typography>Detail príspevku {params.prispevokId} </Typography>
    </Container>
  );
}