import React from 'react';

const SwitchButton = () => {
  return (
    <label className="switch">
      <input type="checkbox" className="switch__button" />
      <span class="switch__slider"></span>
    </label>
  );
};

export default SwitchButton;
