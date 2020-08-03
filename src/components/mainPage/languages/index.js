import React from 'react';

const index = () => {

  const languages = [
    { language: "English", proficiency: "Advanced" },
    { language: "French", proficiency: "Basic" },
    { language: "Portuguese", proficiency: "Native" },
  ];

  return (
    <div className="main--resume__languages card">
      <h3 className="card__title">Languages</h3>
      <div className="border--bottom"></div>
      <ul>
        {languages.map(item => {
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

export default index;
