import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Project";
import Footer from "./footer/Footer";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            {/* <Projects /> */}
            {/* <Footer /> */}
        </div>
    );
};

export default Homepage;
