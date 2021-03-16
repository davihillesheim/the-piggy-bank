import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <div className="contact-content">
          <form className="contact-form">
            <label className="form-label" htmlFor="for">Your Name</label>
            <input className="form-input" type="text" required/>
            <label className="form-label" htmlFor="for">Email</label>
            <input className="form-input" type="email" required/>
            <label className="form-label" htmlFor="for">Your message</label>
            <input className="message-input" type="text" required/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
