import React, { useState } from 'react';
import Section from '../Section';
import Dropdown from '../Dropdown';
import Navbar from '../Navbar';
import { hero, firstSection, secondtSection, thirdSection } from '../Section/Contents.js';
import Footer from '../Footer';
import Contact from '../Contact';

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
