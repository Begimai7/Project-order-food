import {
  Button,
  Grid as MuiGrid,
  styled,
  TextField as MuiTextFilled,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../store/auth/authThunk';

export const SignInPages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    dispatch(signIn(data))
    .unwrap()
    .catch((e) => setError(e.response.data.message))
  };

 const isEmailValid = () => {
  return email.length > 0 && email.includes("@")
 }
 const isPasswordValid = () => {
  return password.length > 0 && password.length >= 6
 }

  return (
    <Grid>
      <Form onSubmit={submitHandler}>
        <TextField 
        error={!isEmailValid}
         value={email} 
         onChange={emailChangeHandler} 
         label="email" />

        <TextField 
          error={!isPasswordValid}
          value={password} 
          onChange={passwordChangeHandler} 
          label="password" />

        { error && <Typography textAlign='center' sx={{color: (theme) => theme.palette.error.main}}>{error}</Typography>}
        <Button type="submit">Sign in</Button>
        <Link to="/signup">Don't you have an account?</Link>
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
