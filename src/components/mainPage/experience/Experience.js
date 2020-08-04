/* eslint-disable react/prop-types */
import React from 'react';
import './experience.scss';

const Experience = ({ experience }) => {
  const {
    isActual, company, jobTitle, city, state, since, to, time, website,
  } = experience;

  return (
    <li className={isActual ? 'active' : ''}>
      <div className="experience__item">
        <div className="left">
          <p className="job-title">{jobTitle}</p>
          <p className="city">{city}, {state}</p>
          <a href={website} target="_blank" rel="noopener noreferrer" className="company">{company}</a>
        </div>
        <div className="right">
          <p className="time">{time}</p>
          <p className="since">{since} - {to}</p>
        </div>
      </div>
      <div className="border--bottom" />
    </li>
  );
};

export default Experience;
