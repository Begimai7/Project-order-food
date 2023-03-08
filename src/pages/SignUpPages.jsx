import React, { useState } from 'react'
import { Button, Grid as MuiGrid, styled, TextField as MuiTextFilled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/auth/authThunk';
import { UserRole } from '../lib/constants/common';


export const SignUpPages = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

const dispatch = useDispatch()

const nameChangeHandler = (e) => {
  setName(e.target.value)
}
const emailChangeHandler = (e) => {
  setEmail(e.target.value)
}
const passwordChangeHandler = (e) => {
  setPassword(e.target.value)
}
const confirmPasswrodChangeHandler = (e) => {
  setConfirmPassword(e.target.value)
}

const submitHandler = (e) => {
  e.preventDefault()

  const data = {
    name, 
    email,
    password,
    role: UserRole.ADMIN
  }

  dispatch(signUp(data))
  console.log("data" , data);
}

  return (
    <Grid>
      <Form onSubmit={submitHandler}>
      <TextField 
          value={name} 
          onChange={nameChangeHandler} 
          label="name" 
          
        />
        <TextField 
          value={email} 
          onChange={emailChangeHandler} 
          label="email" 
          
        />
        <TextField 
          value={password} 
          onChange={passwordChangeHandler} 
          label="password" 
        /> 
         <TextField 
          value={confirmPassword} 
          onChange={confirmPasswrodChangeHandler} 
          label="Confirmpassword" 
        />
        <Button type='submit'>Sign Up</Button>
        <Link to="/signin">Have an account?</Link>
      </Form>
    </Grid>
  );
};
const Grid = styled(MuiGrid)(() => ({
  backgroundColor: '#fff',
  width: '500px',
  marginTop: '40px',
  margin: 'auto',
  padding: '20px',
  borderRadius: '16px',
}));
const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
const TextField = styled(MuiTextFilled)(() => ({
  width: '80%',
  margin: '10px',
  borderRadius: '46px',
}));

  // const submitHandler = (values) => {
  //   const data = {
  //     name: values.name,
  //     email: values.email,
  //     password: values.password,
  //     role: UserRole.ADMIN
  //   }
  //   dispatch(signUp(data))

  //   console.log("values", values);
  // };
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: '',
  //     password: '',
  //     confirmPassword: ""
  //   },
  //   onSubmit: submitHandler
  // });
  // const {handleChange, handleSubmit, values} = formik

