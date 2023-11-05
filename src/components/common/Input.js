import React from 'react';

function Input({ type, name, value, onChange }) {
  return (
    <input
      className="form-control"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
