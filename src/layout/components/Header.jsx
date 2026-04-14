import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

const pages = [
    { label: 'INICIO', path: '/' },
    { label: 'ARTÍCULOS', path: '/articles' },
    { label: 'OFERTAS', path: '/ofert' },
    { label: 'MI CUENTA', path: '/cuenta' },
    { label: 'MIS FAVORITOS', path: '/favorites' },
    { label: 'MIS COMPRAS', path: '/compra' },
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


export const Header = ({ favoritos, carrito }) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static" sx={{ background: '#212121' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box component="img" src='/imgs/Logo.png' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: 40 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component={NavLink}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 800,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: {
                                    md: '1.5rem',
                                    lg: '1.8rem',
                                    xl: '2.2rem'
                                },
                                textShadow: '2px 2px 4px rgba(226, 43, 165, 0.3)',
                            }}
                        >
                            GamerZone
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.label} component={NavLink} to={page.path} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component={NavLink}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: {
                                    xs: '1.1rem',  // Móviles pequeños (iPhone SE)
                                    sm: '1.4rem',  // Tablets
                                }
                            }}
                        >
                            GamerZone
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    component={NavLink}
                                    to={page.path}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        position: 'relative',
                                        '&:hover': {
                                            color: 'rgb(226, 43, 165)',
                                        },
                                        '&.active': {
                                            borderBottom: '2px solid rgb(226, 43, 165)',
                                            color: 'rgb(226, 43, 165)',
                                            fontWeight: 700,
                                        }
                                    }}
                                >
                                    {page.label}

                                    {/* Badge SOLO en MIS FAVORITOS */}
                                    {page.label === 'MIS FAVORITOS' && favoritos > 0 && (
                                        <Badge
                                            badgeContent={favoritos}
                                            color="error"
                                            sx={{
                                                position: 'absolute',
                                                top: 5,
                                                right: 15,
                                                '& .MuiBadge-badge': {
                                                    fontSize: '0.80rem',
                                                    height: 20,
                                                    minWidth: 20,
                                                }
                                            }}
                                        />
                                    )}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                            {/* Carrito */}
                            <IconButton color="inherit" aria-label="carrito">
                                <Badge badgeContent={carrito} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
