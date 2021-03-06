import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Section from '../Section';
import Dropdown from '../Dropdown';
import Hero from '../Hero';
import Navbar from '../Navbar';
import { firstSection, secondtSection, thirdSection } from '../Section/Contents.js';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Dropdown  isOpen={isOpen} handleClick={handleClick}/>
      <Navbar handleClick={handleClick}/>
      <Hero />
      <Section {...firstSection} />
      <Section {...secondtSection} />
      <Section {...thirdSection} />
    </Router>
  )
}

export default Home
