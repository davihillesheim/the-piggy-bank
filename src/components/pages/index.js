import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dropdown from '../Dropdown';
import Navbar from '../Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <Dropdown  isOpen={isOpen} handleClick={handleClick}/>
      <Navbar handleClick={handleClick}/>
    </Router>
  )
}

export default Home
