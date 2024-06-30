import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'leaderboard'), orderBy('score', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setScores(querySnapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  return (
    <Container sx={{ height: '100%', overflow: 'auto', background: 'rgba(0, 0, 0, 0.5)' }}>
      <Box mt={5} textAlign="center">
        <Typography variant="h4" style={{ color: 'white' }}>Leaderboard</Typography>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <List>
            {scores.map((score, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ListItem>
                  <ListItemText primary={`${score.username}: ${score.score}`} style={{ color: 'white' }} />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Leaderboard;