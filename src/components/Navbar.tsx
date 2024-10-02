// src/components/Navbar.tsx
"use client";

import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { AddCircle, AppRegistration, Login } from '@mui/icons-material';

const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels
            sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        >
            <BottomNavigationAction
                label="Domov"
                icon={<HomeIcon />}
                component={Link}
                href="/"
            />

            <BottomNavigationAction
                label="Profily"
                icon={<PersonIcon />}
                component={Link}
                href="/profil"
            />
            <BottomNavigationAction
                label="Príspevky"
                icon={<AddCircle />}
                component={Link}
                href="/prispevok"
            />
            <BottomNavigationAction
                label="Prihlásenie"
                icon={<Login />}
                component={Link}
                href="/auth/prihlasenie"
            />
            <BottomNavigationAction
                label="Registrácia"
                icon={<AppRegistration />}
                component={Link}
                href="/auth/registracia"
            />

        </BottomNavigation>
    );
};

export default Navbar;