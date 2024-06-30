import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  link: {
    marginTop: '16px',
    textAlign: 'center',
  },
});

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const classes = useStyles();

  const handleRegister = async () => {
    try {
      console.log("Registering user with email:", email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully:", userCredential.user);
      navigate('/trivia');
    } catch (error) {
      console.error("Error registering:", error);
      alert(`Error registering: ${error.message}`);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={5} textAlign="center">
        <Typography variant="h4">Register</Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
          Register
        </Button>
        <Typography variant="body2" className={classes.link}>
          Already have an account? <Link to="/login">Login here</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;