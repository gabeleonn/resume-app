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
    console.log("Email sent");
  };

  return (
    <div className="main--resume__contact card">
      <p className="cto">Get in touch!</p>
      <button onClick={handleForm} className="button">Send Email</button>
      {formToggle ?
        (<div className="form--blur">
          <form className="form">
            <h2 className="title">Get in touch</h2>
            <input type="text" placeholder="Name/Company" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button className="button" onClick={e => sendEmail(e)}>Send Message</button>
          </form>
        </div>) : ""}
    </div>
  );
};

export default Index;
