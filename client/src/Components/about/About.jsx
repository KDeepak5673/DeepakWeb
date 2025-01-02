import React from "react";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
    return (
        <Box id="about" sx={{ padding: "60px 0", backgroundColor: "#f4f4f4" }}>
            <Container>
                <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                    About Me
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                    Hi, I'm Deepak Kumar, a passionate software developer focused on cloud computing, web development, and automation.
                    I enjoy solving complex problems, learning new technologies, and contributing to open-source projects. I specialize in creating
                    dynamic and responsive web applications using the latest tools and frameworks.
                </Typography>
            </Container>
        </Box>
    );
};

export default About;
