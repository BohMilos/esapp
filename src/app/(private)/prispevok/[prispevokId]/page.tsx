// src/app/(private)/prispevok/[prispevokId]/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export const metadata = { title: "Detail príspevku | SnapZoška" };

export default async function PostDetail({params} : {params : {prispevokId : string}}) {

  return(
    <Container>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Detail príspevku {params.prispevokId}
      </Typography>
      <Button variant="outlined" href="/prispevok" startIcon={<ArrowBackIcon/> }>
            Späť
      </Button>
    </Container>
  );
}

