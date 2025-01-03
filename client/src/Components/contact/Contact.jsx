import React, { useState, useRef } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = () => {
    // State for form fields
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(""); // To display success or error messages

    // Reference for the form element
    const form = useRef();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs
            .sendForm(
                "service_pz35m4d", // Service ID
                "template_knmpp29", // Template ID
                form.current, // Form element
                "OO4mkdTjq7eEoB5d6" // Public key
            )
            .then(
                (response) => {
                    setStatus("Message sent successfully!");
                    console.log(response);
                    // Reset form fields after submission
                    setUserName("");
                    setUserEmail("");
                    setMessage("");
                },
                (error) => {
                    setStatus("Failed to send message. Please try again.");
                    console.log(error);
                }
            );
    };

    return (
        <Box sx={{ padding: "60px 0", backgroundColor: "#f9f9f9", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "40px",
                    textAlign: "center",
                    color: "#333",
                }}
            >
                Contact Me
            </Typography>

            {/* Contact Form */}
            <form ref={form} onSubmit={handleSubmit} style={{ maxWidth: "500px", width: "100%", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", backgroundColor: "#fff" }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    sx={{ marginBottom: "15px" }}
                    name="UserName" // Make sure the input name matches the placeholder in your template
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    sx={{ marginBottom: "15px" }}
                    name="UserEmail" // Make sure the input name matches the placeholder in your template
                    required
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{ marginBottom: "15px" }}
                    name="message" // Make sure the input name matches the placeholder in your template
                    required
                />
                <Button type="submit" variant="contained" color="primary" sx={{
                    width: "40%",
                    margin: "0 auto",  // Center the button horizontally within its parent
                    padding: "10px",  // Adjust the padding for a larger clickable area
                    fontSize: "16px",  // Set the font size
                    display: "block",  // Make the button block-level to respect the width property
                }}>
                    Send Message
                </Button>
            </form>

            {/* Display status */}
            {status && (
                <Typography
                    sx={{
                        textAlign: "center",
                        marginTop: "20px",
                        color: status.includes("success") ? "green" : "red",
                    }}
                >
                    {status}
                </Typography>
            )}
        </Box>
    );
};

export default ContactForm;
