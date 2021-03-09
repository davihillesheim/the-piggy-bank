import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from '../Section';
import Dropdown from '../Dropdown';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Features from '../Features';
import { hero, firstSection, secondtSection, thirdSection } from '../Section/Contents.js';
import Footer from '../Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Dropdown  isOpen={isOpen} handleClick={handleClick}/>
      <Navbar handleClick={handleClick}/>
      {/* <Hero /> */}
      <Section {...hero} />
      <Section {...firstSection} />
      <Section {...secondtSection} />
      <Section {...thirdSection} />
      <Features />
      <Footer />
    </Router>
  )
}

export default Home
