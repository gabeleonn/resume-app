import React from 'react';
import { useSelector } from 'react-redux';

import './item.scss';
import Item from './Item';

const Index = () => {
  const { education } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__education card">
      <h3 className="card__title">Education</h3>
      <div className="border--bottom" />
      <div className="education__list">
        {education.map((item) => <Item key={item.college} props={item} />)}
      </div>
    </div>
  );
};

export default Index;
