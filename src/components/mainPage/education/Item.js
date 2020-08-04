/* eslint-disable react/prop-types */
import React from 'react';

const Item = ({ props }) => {
  const {
    college, to, since, title,
  } = props;

  return (
    <div className="education__item">
      <p className="from-to">{since} - {to}</p>
      <p className="college">{college}</p>
      <p className="title">{title}</p>
    </div>
  );
};

export default Item;
