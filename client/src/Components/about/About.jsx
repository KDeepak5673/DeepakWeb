import React from "react";
import { Box, Typography, Container } from "@mui/material";

const About = () => {
    return (
        <Box id="about" sx={{padding: "60px 0", backgroundColor: "#f4f4f4" }}>
            <Container>
                <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                    About Me
                </Typography>
                <Typography
                variant="body2"
                
                align="justify"
                sx={{ margin: '20px', lineHeight: '1.6' }}
            >
                Hi there 👋 <br />
                🎓 I’m a student at VIT Bhopal University, pursuing a Bachelor of Technology (B.Tech) in
                Computer Science and Engineering (CSE) with a specialization in Cloud Computing and
                Automation. <br />
                <br />
                💻 I’m passionate about exploring the latest technologies, building innovative projects, and
                contributing to the tech community. <br />
                <br />
                📚 My interests include:
                <ul>
                    <li> Cloud Computing</li>
                    <li> Web Development</li>
                    <li> Java Developer</li>
                    <li> Open Source Contribution</li>
                </ul>
            </Typography>

            
            </Container>
        </Box>
    );
};

export default About;
