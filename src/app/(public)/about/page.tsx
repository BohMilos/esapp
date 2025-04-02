// src/app/(public)/about/page.tsx

import { Typography, Paper, Container, Box, Divider, Link, Stack } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const metadata = { title: "O nás | SnapZoška" };

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 6 },
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, primary.main, secondary.main)',
            backgroundClip: 'text',
            textFillColor: 'text.primary',
            mb: 3,
          }}
        >
          O nás
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Spojte sa s nami na sociálnych sieťach
        </Typography>
        <Divider sx={{ mb: 4 }} />
      </Box>

      <Stack spacing={3} alignItems="center">
        <Link 
          href="https://zochova.sk" 
          target="_blank" 
          underline="hover"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: 'text.primary',
            '&:hover': { color: 'primary.main', textDecoration: 'none' }
          }}
        >
          <SchoolIcon />
          <Typography variant="h6">
            Naša škola
          </Typography>
        </Link>

        <Link 
          href="https://www.facebook.com/spsezochova/" 
          target="_blank" 
          underline="hover"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: 'text.primary',
            '&:hover': { color: '#1877F2', textDecoration: 'none' }
          }}
        >
          <FacebookIcon />
          <Typography variant="h6">
            Facebook
          </Typography>
        </Link>

        <Link 
          href="https://www.instagram.com/spsezochova/" 
          target="_blank" 
          underline="hover"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            color: 'text.primary',
            '&:hover': { color: '#E4405F', textDecoration: 'none' }
          }}
        >
          <InstagramIcon />
          <Typography variant="h6">
            Instagram
          </Typography>
        </Link>
      </Stack>
    </Paper>
  </Container>
  );
}
