import React, { useState } from 'react';
import Section from '../components/Section';
import Dropdown from '../components/Dropdown';
import Navbar from '../components/Navbar';
import { hero, firstSection, secondtSection, thirdSection } from '../components/Section/Contents.js';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Dropdown  isOpen={isOpen} handleClick={handleClick}/>
      <Navbar handleClick={handleClick}/>
      <main>
        <Section {...hero} />
        <Section {...firstSection} />
        <Section {...secondtSection} />
        <Section {...thirdSection} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
