import React from 'react';

const index = () => {

  const skills = [
    "Web Design",
    "ReactJS",
    "HTML/CSS",
    "Mobile Design",
    "Node.js",
    "MVC",
    "SCRUM",
    "Spring Boot",
  ];

  return (
    <div className="main--resume__skills card">
      <h3 className="card__title">Skills</h3>
      <div className="border--bottom"></div>
      <ul>
        {skills.map(el => <li key={el}>{el}</li>)}
      </ul>
    </div>
  );
};

export default index;
