import React, { useState } from 'react';
import { SingleTextarea, Label } from './styles';

const TextArea = ({ error, label, ...rest }) => {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <Label htmlFor={rest.name}>{label}</Label>
      <SingleTextarea
        className="form-control"
        {...rest}
        onBlur={() => setTouched(true)}
      />
      <span className="text-danger">{touched && error}</span>
    </>
  );
};

export default TextArea;
