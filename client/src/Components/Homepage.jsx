import React from "react";

import { Box } from '@mui/material'

import bg from '../public/bg.mp4'


import Profile from "./cards/ProfileCard";
import Bio from "./cards/biocard";


const Homepage = () => {



    return (
        <Box sx={{ position: "relative", width: "100%", height: "100vh", margin : "2px", overflow: "hidden" }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    minWidth: "100%",
                    minHeight: "100%",
                    zIndex: -1,
                    objectFit: "cover",
                }}
            >
                <source src={bg} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <Box
                sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    background: "rgba(0, 0, 0, 0.3)", // Optional semi-transparent overlay
                }}
            >
                
                <Profile /> 
                <Bio />
                

            </Box>
            
        </Box>

    )
}

export default Homepage;