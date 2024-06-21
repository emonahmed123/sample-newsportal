"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from "@mui/icons-material/Facebook";
import { Stack } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];

function Navbar() {
    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/categories/news?category=all-news",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },
    ];

    return (
        <AppBar position="static" className="bg-black">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <Image src={logo} width={100} height={100} alt="logo" /> */}

                    <Box className="w-full text-center ">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button >{item.route}</Button>
                            </Link>
                        ))}
                    </Box>

                    <Box>
                        <Stack
                            direction="row"
                            sx={{
                                "& svg": {
                                    color: "white",
                                },
                            }}
                        >
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
