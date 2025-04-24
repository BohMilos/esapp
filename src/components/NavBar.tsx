// src/components/NavBar.tsx

'use client';

import * as React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTheme } from '../components/ThemeProvider';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { toggleTheme, isDarkMode } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClose = () => setAnchorEl(null);
  const handleNavigate = (path: string) => {
    handleMenuClose();
    router.push(path);
  };

  const nonAuthPaths = [
    { label: 'Domov', value: '/', icon: <HomeIcon /> },
    { label: 'O nás', value: '/about', icon: <InfoIcon /> },
    {
      label: 'Registrácia',
      value: '/auth/registracia',
      icon: <AppRegistrationIcon />,
    },
    { label: 'Prihlásenie', value: '/auth/prihlasenie', icon: <LoginIcon /> },
  ];

  const authPaths = [
    { label: 'Domov', value: '/', icon: <HomeIcon /> },
    { label: 'Hľadať', value: '/hladat', icon: <SearchIcon /> },
    { label: 'Pridať', value: '/pridat', icon: <AddCircleIcon /> },
    {
      label: 'Profil',
      value: 'profile-menu',
      icon: (
        <Avatar
          alt={session?.user?.name || 'User'}
          src={session?.user?.image || undefined}
          sx={{ width: 25, height: 25 }}
        />
      ),
    },
  ];

  const navigationPaths =
    status === 'authenticated' ? authPaths : nonAuthPaths;

  const shouldHighlightHome =
    pathname === '/prispevok' && status === 'authenticated';

  return (
    <Box
      sx={{
        width: 'calc(100% - 32px)',
        position: 'fixed',
        bottom: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '100px',
        boxShadow: '0 6px 40px rgba(0, 0, 0, 0.15)',
        zIndex: 10,
        overflow: 'hidden',
        padding: '8px',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <BottomNavigation
          showLabels
          value={shouldHighlightHome ? '/' : pathname}
          onChange={(event, newValue) => {
            if (newValue === 'profile-menu') {
              setAnchorEl(event.currentTarget as HTMLElement);
            } else {
              router.push(newValue);
            }
          }}
          sx={{ backgroundColor: 'transparent' }}
        >
          {navigationPaths.map((path) => (
            <BottomNavigationAction
              key={path.value}
              label={path.label}
              value={path.value}
              icon={path.icon}
            />
          ))}
        </BottomNavigation>
      </Box>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleNavigate('/profil')}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profil</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            toggleTheme();
            handleMenuClose();
          }}
        >
          <ListItemIcon>
            {isDarkMode ? (
              <LightModeIcon fontSize="small" />
            ) : (
              <DarkModeIcon fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText>
            {isDarkMode ? 'Svetlý režim' : 'Tmavý režim'}
          </ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleNavigate('/auth/odhlasenie')}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Odhlásiť</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
