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
    // background : "linear-gradient(to right, #001b48, #d6e8ee)" ;
    
    @media (max-width: 1200px) {
        padding: 150px;
    }

    @media (max-width: 768px) {
        padding: 100px 30px;
        flex-direction: column;
        height: auto;
    }

    @media (max-width: 480px) {
        padding: 50px 20px;
    }
`;

const Bio = styled(Box)`
    min-width: 65%;
    text-align: left;  /* Left-align text */
    
    @media (max-width: 768px) {
        min-width: 100%;
    }
`;

const Image = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const Contact = styled(Box)`
    padding: 40px 0px;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;

const Links = styled(Box)`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        margin-top: 10px;
    }
`;

const Source = styled(Link)`
    color: #40484f;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;

const Hero = () => {
    return (
        <Profile id="home" >
            <Bio>
                <Typography variant="h2" color="black" fontWeight="bold" sx={{ letterSpacing: '2px', lineHeight: 1.5 }}>
                    Hello, <br />
                    I'm  <Link href={GitHub} smooth duration={1000} style={{ textDecoration: 'none', cursor: "pointer" }}>
                        Deepak Kumar
                    </Link>
                </Typography>
                <Typography variant="h4" color="black" sx={{ letterSpacing: '2px', lineHeight: 1.4 }}>
                    Passionate about Web Development and  <br /> Java Developer
                </Typography>

                <Contact>
                    <Button variant="contained" size="large" component={Scroll} to="contact" smooth duration={1000}>
                        Contact me
                    </Button>
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
