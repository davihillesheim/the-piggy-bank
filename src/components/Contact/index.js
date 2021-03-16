import React from 'react';
import ContactForm from '../ContactForm';
import './Contact.css';
import Save from '../../assets/save.svg';

const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="contact-container">
          <h1 className="contact-header">Contact Us</h1>
          <div className="contact-row">
            <div className="contact-column-1">
              <ContactForm />
            </div>
            <div className="contact-column-2">
              <div className="image-container">
                <img className="image" src={Save} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
