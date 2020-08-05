import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Experience from './Experience';

const Index = () => {
  const { experience } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__experience card">
      <h3 className="card__title">Experience</h3>
      <div className="border--bottom" />
      <ul>
        {experience.map((e) => <Experience key={e.company} experience={e} />)}
      </ul>
      <Link to="/" className="link">See more</Link>
    </div>
  );
};

export default Index;
