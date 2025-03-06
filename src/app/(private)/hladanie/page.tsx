// src/app/(private)/hladanie/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import SearchView from "@/sections/SearchView";

export const metadata = { title: "Hľadanie | SnapZoška" };

export default function SearchPage() {
  return(
      <Container>
        <Typography variant="h3" gutterBottom>Hľadanie</Typography>
        <SearchView />
      </Container>
  );
}