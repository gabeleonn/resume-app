import React from 'react';
import './project.scss';

const Project = ({ project }) => {

  return (
    <div className="project">
      <a href={project.link} target="_blank" className="project__name">{project.name}</a>
      <p className="project__status">{project.status}</p>
    </div>
  );
};

export default Project;
