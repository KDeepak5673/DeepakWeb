import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Copyright = styled(Box)`
    padding: 10px 0;
    display: flex;
    text-align: centre;
    justify-content: center;
`

const Footer = () => {
    return (
        <Copyright sx={{ backgroundColor: "#333", color: "white" }}>
            
                <Typography variant="body2" >
                    © Deepak Kumar. All Rights Reserved.
                </Typography>
                
            
        </Copyright>
    );
};

export default Footer;
