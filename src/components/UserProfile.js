import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const q = query(collection(db, 'leaderboard'), where('username', '==', currentUser.email));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setScores(querySnapshot.docs.map((doc) => doc.data()));
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  if (!currentUser) {
    return <Typography variant="h6" color="error">You need to log in to view your profile.</Typography>;
  }

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Typography variant="h4">{currentUser.email}'s Profile</Typography>
        <Typography variant="h6">Scores:</Typography>
        <List>
          {scores.map((score, index) => (
            <ListItem key={index}>
              <ListItemText primary={`Score: ${score.score}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default UserProfile;