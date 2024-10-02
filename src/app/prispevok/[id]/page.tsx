// src/app/prispevok/[id]/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";

export const metadata = { title: "Detail príspevku | SnapZoška" };

export default function PostDetail(params) {

  return(
    <Container>
      <Typography>Detail príspevku {params.id} </Typography>
    </Container>
  );
}