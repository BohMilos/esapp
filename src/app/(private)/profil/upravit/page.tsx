// src/app/(private)/profil/upravit/page.tsx

import ProfileEditView from "@/components/ProfileEdit";
import { Container, Box, Typography } from "@mui/material";


export const metadata = { title: 'Upravit profil | SnapZoška' };

export default function ProfileEdit() {
    return (
        <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          mb: 8,
          padding: 2,
        }}>
        <Box
          sx={{
            textAlign: "center",
            marginBottom: 4,
          }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}>
            Upraviť profil
          </Typography>
        </Box>
        <ProfileEditView/>
      </Container>
    );
}