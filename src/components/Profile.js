import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const Profile = () => {
  const [userData, setUserData] = useState({ email: '', displayName: '' });
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      };
      fetchUserData();
    }
  }, [user]);

  const handleSave = async () => {
    try {
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, userData);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={5} textAlign="center">
        <Typography variant="h4">Profile</Typography>
        <TextField
          label="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Display Name"
          value={userData.displayName}
          onChange={(e) => setUserData({ ...userData, displayName: e.target.value })}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;