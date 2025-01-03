import React from "react";
import { Box, Typography,  styled } from "@mui/material";

import YourPhoto from "../../public/Photo.JPG";


const Image = styled(Box)`   
    display: flex;
    align-items: center; 
    padding : 30px 10px; 
`

const Content = styled(Box)`
    display : flex;
    padding : 10px 200px;
`

const About = () => {
    return (
        <Box id="about" sx={{ width: "100%",padding: "60px 0", backgroundColor: "#f4f4f4" }}>
            <Box sx={{ width: "100% "  , margin: "0px", padding: "0" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px", display: "flex", justifyContent: "center" }}>
                    About Me
                </Typography>
                <Content>


                    <Image>

                        <img
                            src={YourPhoto}
                            alt="Deepak Kumar"
                            style={{
                                width: "300px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "300px",
                                borderRadius: "10px",
                                objectFit: "cover",
                            }}
                        />

                    </Image>

                    <Box sx={{ padding: "20px 0px"}}>

                        <Typography variant="h6" sx={{ fontWeight: "bold", margin: '20px 60px', lineHeight: '1.6' }}>
                            I'am Deepak Kumar
                        </Typography>
                        <Typography variant="body1" sx={{  margin: '20px 60px', lineHeight: '1.6', textAlign: "justify" }}>

                            I am a student at VIT Bhopal University, pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering with a specialization in Cloud Computing and Automation.

                            I am passionate about exploring cutting-edge technologies, building innovative projects, and making meaningful contributions to the tech community.
                            <br />

                            My areas of interest include:

                            <Box component="ul" sx={{  listStyle: 'disc', padding: 0, margin: '0 30px' }}>
                                <Box component="li" >Cloud Computing</Box>
                                <Box component="li" >Web Development</Box>
                                <Box component="li" >Java Development</Box>
                                <Box component="li">Open Source Contribution</Box>
                            </Box>

                        </Typography>
                    </Box>
                </Content>


            </Box>
        </Box>
    );
};

export default About;
