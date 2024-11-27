// src/app/(private)/profil/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import AuthGuardian from "@/components/AuthGuardian";

export const metadata = { title: "Zoznam profilov | SnapZoška" };

export default function ProfilList() {

  return(
      <Container>
        <Typography>Zoznam profilov</Typography>
      </Container>
  );
}
