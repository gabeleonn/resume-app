import React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  const { bio, picture } = useSelector((state) => state.resume.data);

  return (
    <div className="main--resume__bio card">
      <div className="image">
        <img src={picture} alt="Foto de perfil." />
      </div>
      <div className="bio">
        <h3 className="card__title">Bio</h3>
        <div className="border--bottom" />
        <p className="text">{bio}</p>
      </div>
    </div>
  );
};

export default Index;
