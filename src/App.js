import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Trivia from './components/Trivia';
import Leaderboard from './components/Leaderboard';
import UserProfile from './components/UserProfile';
import Achievements from './components/Achievements';
import StockLookup from './components/StockLookup';
import TwitterFeed from './components/TwitterFeed';
import LandingPage from './components/LandingPage';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function App() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/trivia">Trivia</Button>
          <Button color="inherit" component={Link} to="/leaderboard">Leaderboard</Button>
          <Button color="inherit" component={Link} to="/profile">Profile</Button>
          <Button color="inherit" component={Link} to="/achievements">Achievements</Button>
          <Button color="inherit" component={Link} to="/stock-lookup">Stock Lookup</Button>
          <Button color="inherit" component={Link} to="/twitter-feed">Twitter Feed</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ position: 'relative', height: '100vh' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}
        >
          <Leaderboard />
        </motion.div>
        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/trivia" element={<Trivia setShowConfetti={setShowConfetti} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/stock-lookup" element={<StockLookup />} />
            <Route path="/twitter-feed" element={<TwitterFeed handles={['DeItaone', 'theroaringkitty', 'faststockmarketnews']} />} />
          </Routes>
        </Box>
        {showConfetti && <Confetti width={width} height={height} />}
      </Box>
    </>
  );
}

export default App;