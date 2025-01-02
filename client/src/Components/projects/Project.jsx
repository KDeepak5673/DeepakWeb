import React from "react";
import { Box, Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const Projects = () => {
    return (
        <Box id="projects" sx={{ padding: "60px 0" }}>
            <Container>
                <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "40px" }}>
                    My Projects
                </Typography>
                <Grid container spacing={4}>
                    {/* Example of a Project Card */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <Box
                                sx={{
                                    height: "200px",
                                    backgroundColor: "#eee",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="h6">Project 1</Typography>
                            </Box>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    A brief description of your project. 
                                    Technologies: React, Node.js, etc.
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ marginTop: "10px" }}>
                                    View Project
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Add more project cards as needed */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
