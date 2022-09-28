import React from 'react';
import '../styles/components/formInput.module.css';

const FormInput = (props) => {
    const {label, onChange, id, errorMessage, ...inputProps} = props;
    console.log(id);
    console.log(errorMessage);
  return (
    <div className='formInput'>
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} />
        <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;