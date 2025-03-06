// src/app/(private)/profil/[id]/page.tsx

import  Container  from "@mui/material/Container";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProfileView from "@/sections/ProfileView";
export const metadata = { title: "Profil užívateľa | SnapZoška" };

export default function ProfilDetail({params} : {params : {id : string}}) {
  return(
    <Container>
      <Button variant="outlined" href="/hladanie" startIcon={<ArrowBackIcon/> }>
            Späť
      </Button>
      <ProfileView id={params.id} />
    </Container>
  );
}
