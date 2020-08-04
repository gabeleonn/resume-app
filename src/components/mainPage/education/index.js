import React from 'react';

import './item.scss';
import Item from './Item';

const index = () => {
  const education = [
    {
      college: 'College Name', since: '2017', to: '2019', title: 'Tecnology Marketing',
    },

    {
      college: 'College Name 1', since: '2017', to: '2019', title: 'Tecnology Marketing',
    },
  ];

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

export default index;
