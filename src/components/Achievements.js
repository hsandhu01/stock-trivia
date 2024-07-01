import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { Container, Typography, Box, List, ListItem, ListItemText, Avatar } from '@mui/material';

const achievementsList = [
  { id: 1, name: "First Correct Answer", condition: (correctAnswers) => correctAnswers >= 1 },
  { id: 2, name: "Five Correct Answers", condition: (correctAnswers) => correctAnswers >= 5 },
  { id: 3, name: "Ten Correct Answers", condition: (correctAnswers) => correctAnswers >= 10 },
];

const Achievements = () => {
  const { currentUser } = useAuth();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const q = query(collection(db, 'leaderboard'), where('username', '==', currentUser.email));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const totalCorrect = querySnapshot.docs.reduce((acc, doc) => acc + doc.data().score, 0);
        setCorrectAnswers(totalCorrect);
        const userAchievements = achievementsList.filter(achievement => achievement.condition(totalCorrect));
        setAchievements(userAchievements);
      });
      return () => unsubscribe();
    }
  }, [currentUser]);

  if (!currentUser) {
    return <Typography variant="h6" color="error">You need to log in to view your achievements.</Typography>;
  }

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Typography variant="h4">{currentUser.email}'s Achievements</Typography>
        <List>
          {achievements.map((achievement) => (
            <ListItem key={achievement.id}>
              <Avatar>{achievement.name[0]}</Avatar>
              <ListItemText primary={achievement.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Achievements;