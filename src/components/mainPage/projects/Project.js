/* eslint-disable react/prop-types */
import React from 'react';
import './project.scss';

const Project = ({ props }) => {
  const { link, name, status } = props;
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project__name">{name}</a>
      <p className="project__status">{status}</p>
    </div>
  );
};

export default Project;
