import React from 'react';
import Project from './Project';

const index = () => {
  const projects = [
    {
      name: 'Project 1',
      status: 'In-Progress',
      link: 'http://google.com',
    },
    {
      name: 'Project 2',
      status: 'In-Progress',
      link: 'http://google.com',
    },
    {
      name: 'Project 3',
      status: 'Done',
      link: 'http://google.com',
    },
  ];

  return (
    <div className="main--resume__projects card">
      <h3 className="card__title">Projects</h3>
      <div className="border--bottom" />
      {projects.map((project) => <Project key={project.name} props={project} />)}
    </div>
  );
};

export default index;
