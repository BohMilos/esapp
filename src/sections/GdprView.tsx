// src/sections/GdprView.tsx

"use client";

import { Button, Container, Link, Typography, Paper, Box, Divider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// This component renders the GDPR page
export default function GdprView(){
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
                    GDPR - Ochrana osobných údajov
                </Typography>
                
                <Typography 
                    variant="body1" 
                    sx={{ 
                        mb: 4,
                        color: 'text.secondary',
                        fontSize: '1.1rem',
                    }}
                >
                    Vaša ochrana súkromia je pre nás veľmi dôležitá. V tomto dokumente sa dozviete, ako spracúvame a chránime vaše osobné údaje v súlade s nariadením GDPR.
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
                        Zodpovednosť
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            ml: 2,
                            fontSize: '1rem',
                            lineHeight: 1.7,
                        }}
                    >
                        Všetky osobné údaje, ktoré nám poskytnete, budú použité iba na účely, na ktoré boli poskytnuté.
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
                        Práva užívateľov
                    </Typography>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            ml: 2,
                            fontSize: '1rem',
                            lineHeight: 1.7,
                        }}
                    >
                        Máte právo na prístup k svojim údajom, ich úpravu alebo vymazanie. Kontaktujte nás na emailovej adrese{' '}
                        <Link 
                            href="mailto:support@snapzoska.sk" 
                            underline="hover"
                            sx={{ 
                                color: 'primary.main',
                                fontWeight: 'medium',
                            }}
                        >
                            support@snapzoska.sk
                        </Link>
                        .
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
                    Ďakujeme, že dodržiavate podmienky používania našej aplikácie.
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