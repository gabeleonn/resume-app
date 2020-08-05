import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  const { languages } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__languages card">
      <h3 className="card__title">Languages</h3>
      <div className="border--bottom" />
      <ul>
        {languages.map((item) => {
          return (
            <li key={item.language}>
              <p className="lang">{item.language}</p>
              <p className="proficiency">{item.proficiency}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
