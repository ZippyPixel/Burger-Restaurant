import {React, useState, useEffect} from 'react';
import FormInput from '../components/FormInput';
import styles from '../styles/pages/home.module.css';

const Home = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState({
    username:'',
    phoneNumber:'',
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(values); // Valid Form Values
      location.href='/burger';
  }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /(^(\+8801|8801|01))[13-9]{1}(\d){8}$/;
    if (!values.username){
        errors.username = 'Name is required';
    } else if (values.username.length > 32){
        errors.username = 'Cannot use more than 32 characters';
    }
    
    if (!values.phoneNumber){
        errors.phoneNumber = 'Phone number is required';
    } else if (!regex.test(values.phoneNumber)){
        errors.phoneNumber = 'Phone number is not valid';
    }
    return errors;
};

  const onChange = (e) => {
    setValues({...values, [e.target.name]:e.target.value});
  };

  const inputs = [
    {
      id:1,
      name:'username',
      type:'text',
      placeholder: 'Full Name',
      label: 'Username',
      errorMessage:formErrors.username,
    },
    {
      id:2,
      name:'phoneNumber',
      type:'text',
      placeholder: '+880',
      label: 'Phone Number',
      errorMessage:formErrors.phoneNumber,
    },
  ];

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Customer Info</h1>
        {inputs.map((input) => (
          <FormInput 
            key={input.id} 
            {...input} v
            alue={values[input.name]} 
            onChange={onChange} 
          />
        ))}
        <button>Lets Eat</button>
      </form>
    </div>
  );
};

export default Home;