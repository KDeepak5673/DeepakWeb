import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box id="contact" sx={{ padding: "20px 0", backgroundColor: "#333", color: "white" }}>
            <Container>
                <Typography variant="body2" align="center" sx={{ marginBottom: "10px" }}>
                    © 2025 Deepak Kumar. All Rights Reserved.
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                    <Link href="https://github.com" target="_blank" sx={{ margin: "0 10px", color: "white" }}>
                        GitHub
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" sx={{ margin: "0 10px", color: "white" }}>
                        LinkedIn
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
