import React, { useState } from 'react';
import { SingleInput, Label } from './styles';

const Input = ({ error, label, ...rest }) => {
  const [touched, setTouched] = useState(false);

  return (
    <>
      <Label htmlFor={rest.name}>{label}</Label>
      <SingleInput
        className="form-control"
        {...rest}
        onBlur={() => setTouched(true)}
      />
      <span className="text-danger">{touched && error}</span>
    </>
  );
};

export default Input;
