import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, styled } from "@mui/material";
import { Link } from "react-scroll"; // For scroll links

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
    return (
        <Header>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    <Link to="home" smooth duration={1000} style={{ textDecoration: 'none', cursor: "pointer" }} >
                        Deepak Kumar
                    </Link>
                </Typography>

                <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "flex-end" }}>
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
            </Toolbar>
        </Header>
    );
};

export default Navbar;
