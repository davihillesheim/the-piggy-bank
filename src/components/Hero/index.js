import React from 'react';
import './Hero.css';
import { Link as ScrollLink } from 'react-scroll';
import Video from '../../videos/background_video.mp4';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-background">
        <video className="video-background" autoPlay loop muted src={Video} type='video/mp4'/>
      </div>
      <div className="hero-content">
        <h1 className="hero-header">Saving was never that easy!</h1>
        <p className="hero-paragraph">Sign up and explore our features!</p>
      <div className="hero-button-container">
        <ScrollLink className="hero-button" to="signup">
          Get started!
        </ScrollLink>
      </div>
      </div>
    </div>
  )
}

export default Hero;
