import React from 'react';
import Experience from './Experience';

const index = () => {

  const experiences = [
    {
      isActual: true,
      company: "Company Name",
      jobTitle: "Job Title",
      city: "City",
      state: "ST",
      since: "April 2000",
      to: "June 2008",
      time: "8 years and 2 months",
      website: "http://google.com"
    },
    {
      isActual: false,
      company: "Company Name 1",
      jobTitle: "Job Title",
      city: "City",
      state: "ST",
      since: "April 2000",
      to: "June 2008",
      time: "8 years and 2 months",
      website: "http://google.com"
    }
  ];

  return (
    <div className="main--resume__experience card">
      <h3 className="card__title">Experience</h3>
      <div className="border--bottom"></div>
      {experiences.map(experience => <Experience key={experience.company} experience={experience} />)}
    </div>
  );
};

export default index;
