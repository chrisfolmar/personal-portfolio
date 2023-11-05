import React from 'react';

function TextArea({ name, value, onChange }) {
  return (
    <textarea
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextArea;
