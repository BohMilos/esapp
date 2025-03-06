// src/app/(private)/profil/page.tsx

import  Container  from "@mui/material/Container";
import UserView from "@/sections/UserView";

export const metadata = { title: "Váš profil | SnapZoška" };

export default function ProfilList() {
  return (
    <Container>
      <UserView/>
    </Container>
  );
}
