import React from "react";
import { Box, Typography, styled, Link, Button } from "@mui/material";

import { Link as Scroll } from "react-scroll";

import YourPhoto from "../../public/Photo.JPG"; 

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { GitHub } from "../../public/data";
import { LinkedIn } from "../../public/data";
import { Youtube } from "../../public/data";

const Profile = styled(Box)` 
    height: 42vh;
    display: flex;
    padding: 200px;
    
    align-items: center;
    position: relative;
`

const Bio = styled(Box)`
    min-width: 65%;
`

const Image = styled(Box)`
     
    display: flex;
    align-items: center;

    
    
`
const Contact = styled(Box)`
    padding: 40px 0px;
    display: flex;    
`

const Links = styled(Box)`
    display : flex;  
`

const Source = styled(Link)`
    color: #40484f;
    padding : 0 40px 0 0;
    
`


const Hero = () => {
    return (
        <Profile id="home">

            <Bio >
                <Typography variant="h2" color="black" fontWeight="bold" sx={{letterSpacing: '2px', lineHeight: 1.5}}>
                    Hello, <br />
                    I'm  <Link href={GitHub} smooth duration={1000} style={{ textDecoration: 'none', cursor: "pointer" }} >
                        Deepak Kumar
                    </Link>
                </Typography>
                <Typography variant="h4" color="black" sx={{letterSpacing: '2px', lineHeight: 1.4}}>
                    Passionate about Web Development and  <br /> Java Developer
                </Typography>

                <Contact>


                    <Button variant="contained" size="large" component={Scroll} to="contact" smooth duration={1000} >Contact me</Button>
                </Contact>

                <Links>
                    <Source href={LinkedIn}><LinkedInIcon /></Source>
                    <Source href={GitHub}><GitHubIcon /></Source>
                    <Source href={Youtube}><YouTubeIcon /></Source>
                </Links>



            </Bio>


            <Image>

                <img
                    src={YourPhoto}
                    alt="Deepak Kumar"
                    style={{
                        width: "250px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "250px",
                        borderRadius: "50%",
                        objectFit: "cover", 
                    }}
                />

            </Image>


        </Profile>
    );
};

export default Hero;
