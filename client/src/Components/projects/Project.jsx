import React from "react";
import { Box, Container, Card, CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Updated Grid2 import
import projectData from "./ProjectData"; // Import the project data

const Projects = () => {
    return (
        <Box id="projects" sx={{ padding: "60px 0" }}>
            <Container>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "40px",
                        textAlign: "center",
                    }}
                >
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {projectData.map((project) => (
                        <Grid key={project.id} xs={12} sm={6} md={4}>
                            <Card sx={{ width: 350, height: 325 }}>
                                <Box
                                    sx={{

                                        height: "180px",
                                        backgroundColor: "#eee",
                                        backgroundImage: `url(${project.image})`, // Set background image dynamically
                                        backgroundSize: "cover", // Ensure the image covers the entire area
                                        backgroundPosition: "center", // Center the image
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >

                                </Box>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Technologies used : {project.technologies}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.codeLink}
                                        sx={{ marginTop: "10px" }}
                                    >
                                        View Details
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
