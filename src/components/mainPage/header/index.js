import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  const { jobTitle, userName } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__header">
      <div className="stripe--black" />
      <div className="stripe--white">
        <div className="stripe--white__border--left" />
        <p className="stripe--white__title">{jobTitle}</p>
        <h2 className="stripe--white__name">{userName}</h2>
      </div>
    </div>
  );
};

export default Index;
