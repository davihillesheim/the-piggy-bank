import React from 'react';
import ContactForm from '../ContactForm';
import './Contact.css';
import registerExpenses from '../../assets/register_expenses.svg';

const Contact = () => {
  return (
    <>
    <div className="contact" id="contact">
        <div className="contact-container">
          <h1 className="contact-h1">Contact Us</h1>
          <div className="contact-row">
            <div className="contact-column-1">
              <ContactForm />
            </div>
            <div className="contact-column-2">
              <div className="contact-image-container">
                <img className="contact-image" src={registerExpenses} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
