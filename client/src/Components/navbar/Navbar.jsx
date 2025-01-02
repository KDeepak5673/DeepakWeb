import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, styled } from "@mui/material";
import { Link } from "react-scroll"; // For scroll links


const Header = styled(AppBar)`
    background: white;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    color: black;
    padding: 5px 150px;
    zIndex: 999;
    // opacity: 0.9;
`

const Navbar = () => {
    return (
        <Header>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    <Link to="home" smooth duration={1000} style={{ textDecoration: 'none' , cursor: "pointer" }} >
                        Deepak Kumar
                    </Link>
                </Typography>

                <Box sx={{ display: "flex", gap: "20px" }}>
                    <Button component={Link} to="home" smooth duration={1000} sx={{ color: "black" }}>
                        Home
                    </Button>
                    <Button component={Link} to="about" smooth duration={1000} sx={{ color: "black" }}>
                        About
                    </Button>
                    <Button component={Link} to="projects" smooth duration={1000} sx={{ color: "black" }}>
                        Projects
                    </Button>
                    <Button component={Link} to="contact" smooth duration={1000} sx={{ color: "black" }}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </Header>
    );
};

export default Navbar;
