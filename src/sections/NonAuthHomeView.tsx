// src/sections/NonAuthHomeView.tsx
"use client";
import React from "react";
import { 
    Typography, 
    Container, 
    Link, 
    Box, 
    Paper,
    Button,
    Stack,
    Divider 
} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// This component renders the home page for non-authenticated users
const NonAuthHomeView: React.FC = () => {
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
                        SnapZoška Vás víta!
                    </Typography>
                    <Typography 
                        variant="h6" 
                        color="text.secondary"
                        sx={{ mb: 4 }}
                    >
                        Zdieľajte svoje najlepšie momenty s priateľmi
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                </Box>

                <Stack spacing={3} alignItems="center">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Chcete vidieť zaujímavé príspevky?
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<LoginIcon />}
                            href="/auth/prihlasenie"
                            sx={{
                                mt: 2,
                                px: 4,
                                borderRadius: 2,
                                textTransform: 'none',
                            }}
                        >
                            Prihlásiť sa
                        </Button>
                    </Box>

                    <Divider flexItem>alebo</Divider>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Nemáte účet?
                        </Typography>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<PersonAddIcon />}
                            href="/auth/registracia"
                            sx={{
                                mt: 2,
                                px: 4,
                                borderRadius: 2,
                                textTransform: 'none',
                            }}
                        >
                            Registrovať sa
                        </Button>
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
};

export default NonAuthHomeView;
