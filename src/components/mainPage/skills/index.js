import React from 'react';

import { useSelector } from 'react-redux';

const Index = () => {
  const { skills } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__skills card">
      <h3 className="card__title">Habilidades</h3>
      <div className="border--bottom" />
      <ul>
        {skills.map((el) => <li key={el}>{el}</li>)}
      </ul>
    </div>
  );
};

export default Index;
