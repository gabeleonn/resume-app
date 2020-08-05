/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const index = () => {
  return (
    <div className="main--resume__shortcuts card">
      <p className="cto">Social Media</p>
      <div className="icons">
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="icon"><FaGithub /></a>
      </div>
    </div>
  );
};

export default index;
