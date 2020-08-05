import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  const { bio } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__bio card">
      <div className="image" />
      <div className="text">
        <h3 className="card__title">Bio</h3>
        <div className="border--bottom" />
        {bio}
      </div>
    </div>
  );
};

export default Index;
