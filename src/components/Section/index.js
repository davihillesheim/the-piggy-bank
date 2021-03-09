import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Section.css';

const Section = ({id, lightBackground, imgFirst, headline, title, subtitle, button, img, alt, primary}) => {
  return (
    <>
    <div className={ lightBackground ? "section light" : "section" }  id={id}>
        <div className="section-container">
          <div className={ imgFirst ? "section-row img-first" : "section-row" }>
            <div className="section-column-1">
              <div className="section-text-container">
                <p className={lightBackground ? "headline light" : "headline"}>{headline}</p>
                <h1 className={lightBackground ? "title light" : "title"}>{title}</h1>
                <p className={lightBackground ? "subtitle light" : "subtitle"}>{subtitle}</p>
                <div className="button-container">
                  <ScrollLink className={(button != null) ? "button" : "button hidden"}
                  to="home"
                  smooth={true} 
                  duration={500} 
                  spy={true} 
                  exact="true"
                  offset={-80}
                  primary={primary ? 'true' : 'false'} >
                    {button}
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="section-column-2">
              <div className="image-container">
                <img className="image" src={img} alt={alt}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section;
