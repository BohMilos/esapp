// src/app/(private)/hladanie/page.tsx

import Typography from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import SearchView from "@/sections/SearchView";
import { FormControl, Input, InputLabel } from "@mui/material";

export const metadata = { title: "Hľadanie | SnapZoška" };

export default function SearchPage() {
  return(
      <Container>
        <Typography variant="h3" gutterBottom>Hľadanie</Typography>
        <FormControl sx={{ m: 2, ml: 0 }}>
          <InputLabel>Hľadajte podľa mena</InputLabel>
          <Input id="search" />
        </FormControl>
        <SearchView />
      </Container>
  );
}