import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, styled, IconButton, Drawer } from "@mui/material";
import { Link } from "react-scroll"; // For scroll links
import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar)`
    background: white;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    color: black;
    padding: 5px 150px;
    z-index: 999;
    
    @media (max-width: 1200px) {
        padding: 5px 100px;
    }

    @media (max-width: 768px) {
        padding: 5px 20px;
    }

    @media (max-width: 480px) {
        padding: 5px 10px;
    }
`;

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => {
        setOpen(open);
    };

    return (
        <Header>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    <Link to="home" smooth duration={1000} style={{ textDecoration: 'none', cursor: "pointer" }} >
                        Deepak Kumar
                    </Link>
                </Typography>

                {/* Desktop View */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: "20px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Button component={Link} to="home" smooth duration={1000} sx={{ color: "black", textAlign: "left" }}>
                        Home
                    </Button>
                    <Button component={Link} to="about" smooth duration={1000} sx={{ color: "black", textAlign: "left" }}>
                        About
                    </Button>
                    <Button component={Link} to="projects" smooth duration={1000} sx={{ color: "black", textAlign: "left" }}>
                        Projects
                    </Button>
                    <Button component={Link} to="contact" smooth duration={1000} sx={{ color: "black", textAlign: "left" }}>
                        Contact
                    </Button>
                </Box>

                {/* Hamburger Menu Icon for Mobile View */}
                <IconButton
                    color="black"
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                    onClick={() => toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Drawer (Side Menu) */}
            <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
                <Box sx={{ width: 250, padding: "20px" }}>
                    <Button component={Link} to="home" smooth duration={1000} sx={{ color: "black", marginBottom: "15px" }} onClick={() => toggleDrawer(false)}>
                        Home
                    </Button>
                    <Button component={Link} to="about" smooth duration={1000} sx={{ color: "black", marginBottom: "15px" }} onClick={() => toggleDrawer(false)}>
                        About
                    </Button>
                    <Button component={Link} to="projects" smooth duration={1000} sx={{ color: "black", marginBottom: "15px" }} onClick={() => toggleDrawer(false)}>
                        Projects
                    </Button>
                    <Button component={Link} to="contact" smooth duration={1000} sx={{ color: "black" }} onClick={() => toggleDrawer(false)}>
                        Contact
                    </Button>
                </Box>
            </Drawer>
        </Header>
    );
};

export default Navbar;
