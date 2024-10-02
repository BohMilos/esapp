// src/app/prispevok/[id]/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";

export const metadata = { title: "Detail príspevku | SnapZoška" };

export default function PostDetail(postDetail.id) {

  return(
    <Container>
      <Typography>Detail príspevku {postDetail.id} </Typography>
    </Container>
  );
}