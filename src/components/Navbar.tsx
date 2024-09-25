// src/components/Navbar.tsx
"use client";

import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

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
                label="Home"
                icon={<HomeIcon />}
                component={Link}
                href="/"
            />
            <BottomNavigationAction
                label="Search"
                icon={<SearchIcon />}
                component={Link}
                href="/hladanie"
            />
            <BottomNavigationAction
                label="Add"
                icon={<AddBoxIcon />}
                component={Link}
                href="/pridat"
            />
            <BottomNavigationAction
                label="Notifications"
                icon={<NotificationsIcon />}
                component={Link}
                href="/notifikacie"
            />
            <BottomNavigationAction
                label="Profile"
                icon={<PersonIcon />}
                component={Link}
                href="/profil"
            />
        </BottomNavigation>
    );
};

export default Navbar;