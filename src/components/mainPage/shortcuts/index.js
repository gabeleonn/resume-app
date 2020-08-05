/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Index = () => {
  const { instagram, linkedin, github } = useSelector((state) => state.resume.data.socialMedia);

  return (
    <div className="main--resume__shortcuts card">
      <p className="cto">Mídias Sociais</p>
      <div className="icons">
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="icon"><FaInstagram /></a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon"><FaLinkedin /></a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="icon"><FaGithub /></a>
      </div>
    </div>
  );
};

export default Index;
