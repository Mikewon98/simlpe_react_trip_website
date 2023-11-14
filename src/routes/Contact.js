import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        heroImg={contactImg}
        cName='hero'
        title='Contact'
        text='Ready to serve you at any time'
        url='/'
      />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
