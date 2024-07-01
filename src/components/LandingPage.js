import React from 'react';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 5, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>Welcome to Stock Market Trivia!</Typography>
        <Typography variant="h5" gutterBottom>Test your knowledge on the stock market and finance.</Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" component={Link} to="/trivia" sx={{ marginRight: 2 }}>Start Trivia</Button>
          <Button variant="outlined" color="secondary" component={Link} to="/leaderboard">View Leaderboard</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LandingPage;