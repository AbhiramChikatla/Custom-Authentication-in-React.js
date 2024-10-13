import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="content w-full min-h-screen py-10 px-32">
              Content goes here 
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
