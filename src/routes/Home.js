import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={homeImg}
        cName='hero'
        title='Your Journey Your Story'
        text='Choose Your Favorite Destination'
        url='/'
        btnClass='show'
        buttonText='Travel Plan'
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
