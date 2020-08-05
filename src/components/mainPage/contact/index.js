/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './form.scss';

const Index = () => {
  const [formToggle, setFormToggle] = useState(false);

  const handleForm = () => {
    setFormToggle(!formToggle);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormToggle(false);
  };

  return (
    <div className="main--resume__contact card">
      <p className="cto">Get in touch!</p>
      <button onClick={handleForm} type="button" className="button">Send Email</button>
      {formToggle
        ? (
          <div className="form--blur">
            <form className="form">
              <div onClick={handleForm} role="button" className="x-icon__div"><div className="x-icon" /></div>
              <h2 className="title">Get in touch</h2>
              <input type="text" placeholder="Name/Company" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" />
              <button className="button" type="button" onClick={(e) => sendEmail(e)}>Send Message</button>
            </form>
          </div>
        ) : ''}
    </div>
  );
};

export default Index;
