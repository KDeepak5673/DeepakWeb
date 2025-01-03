import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Copyright = styled(Box)`
    padding: 10px 0;
    display: flex;
    text-align: centre;
`

const Footer = () => {
    return (
        <Copyright sx={{ backgroundColor: "#333", color: "white" }}>
            
                <Typography variant="body2" align="center" >
                    © Deepak Kumar. All Rights Reserved.
                </Typography>
                
            
        </Copyright>
    );
};

export default Footer;
