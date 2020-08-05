import React from 'react';
import { useSelector } from 'react-redux';

import Project from './Project';

const Index = () => {
  const { projects } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__projects card">
      <h3 className="card__title">Projetos</h3>
      <div className="border--bottom" />
      {projects.map((project) => <Project key={project.name} props={project} />)}
    </div>
  );
};

export default Index;
