import { Box, Button, Container, Divider, Paper, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TermsConditionsView() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
    <Paper 
        elevation={0} 
        sx={{ 
            p: 4, 
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
        }}
    >
        {/* Header */}
        <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ 
                fontWeight: 'bold',
                mb: 3,
            }}
        >
            Podmienky používania
        </Typography>
        
        <Typography 
            variant="body1" 
            sx={{ 
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.1rem',
            }}
        >
            Tieto podmienky upravujú používanie aplikácie SnapZoška. Pred použitím našej aplikácie si prosím dôkladne prečítajte tieto podmienky.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Sections */}
        <Box sx={{ mb: 4 }}>
            <Typography 
                variant="h5" 
                sx={{ 
                    fontWeight: "bold",
                    mb: 2,
                    color: 'primary.main',
                }}
            >
                Používanie aplikácie
            </Typography>
            <Typography 
                variant="body1" 
                sx={{ 
                    ml: 2,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                }}
            >
                Užívateľ sa zaväzuje používať aplikáciu v súlade so zákonmi a dobrými mravmi.
            </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
            <Typography 
                variant="h5" 
                sx={{ 
                    fontWeight: "bold",
                    mb: 2,
                    color: 'primary.main',
                }}
            >
                Ochrana údajov
            </Typography>
            <Typography 
                variant="body1" 
                sx={{ 
                    ml: 2,
                    fontSize: '1rem',
                    lineHeight: 1.7,
                }}
            >
                Vaše údaje sú spracovávané v súlade s našimi zásadami ochrany osobných údajov.
            </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Footer note */}
        <Typography 
            variant="body1" 
            sx={{ 
                my: 4,
                fontStyle: 'italic',
                color: 'text.secondary',
                textAlign: 'center',
            }}
        >
            Viac informácií nájdete v našich Podmienkach používania.
        </Typography>

        {/* Back button */}
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-start' }}>
            <Button 
                variant="outlined" 
                href="/auth/registracia" 
                startIcon={<ArrowBackIcon/>}
                size="large"
                sx={{ 
                    borderRadius: 2,
                    textTransform: 'none',
                    px: 4,
                }}
            >
                Späť
            </Button>
        </Box>
    </Paper>
</Container>
  );
}
