import React from 'react';

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
      {experience.length < 2
        ? <button to="/" type="button" className="link">See more</button> : ''}
    </div>
  );
};

export default Index;
