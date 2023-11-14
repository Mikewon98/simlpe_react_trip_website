import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceImg from "../assets/9.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={serviceImg}
        cName='hero'
        title='Service'
        text='Choose Your Favorite Destination'
        url='/'
        btnClass='show'
        buttonText='Travel Plan'
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
