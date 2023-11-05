import React from 'react';

function TextInput({ label, name, value, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;
