// src/app/(private)/profil/[id]/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const metadata = { title: "Detail profilu | SnapZoška" };

export default function ProfilDetail({params} : {params : {id : string}}) {
  return(
    <Container>
      <Typography>Detail profilu {params.id}</Typography>
      <Button variant="outlined" href="/hladanie" startIcon={<ArrowBackIcon/> }>
            Späť
      </Button>
    </Container>
  );
}
