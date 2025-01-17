import React, { useState, useEffect } from 'react';
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Button, Container, Typography, Box, LinearProgress, TextField, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import '../App.css';

const Trivia = ({ setShowConfetti }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answerFeedback, setAnswerFeedback] = useState(null);
  const [username, setUsername] = useState('');
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds for each question
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const q = query(collection(db, 'triviaQuestions'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setQuestions(querySnapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion(false);
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNextQuestion = (isCorrect) => {
    setAnswerFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000); // Confetti for 2 seconds
    }

    setTimeout(() => {
      setAnswerFeedback(null);
      setSelectedAnswerIndex(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(10);
    }, 2000);
  };

  const handleAnswer = (isCorrect, index) => {
    setSelectedAnswerIndex(index);
    handleNextQuestion(isCorrect);
  };

  const handleFinish = async () => {
    try {
      await addDoc(collection(db, 'leaderboard'), {
        username,
        score,
      });
    } catch (error) {
      console.error('Error saving score: ', error);
    }
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <Container>
        <Box mt={5} textAlign="center">
          <Typography variant="h4">Your Score: {score}</Typography>
          <TextField
            label="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinish}
            fullWidth
            disabled={!username}
          >
            Save Score
          </Button>
        </Box>
      </Container>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <Container className="container">
      <LinearProgress variant="determinate" value={progress} />
      <Paper elevation={3} className="question-container" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Typography variant="h4" mt={2}>{currentQuestion.question}</Typography>
        <Box className="answers-container">
          {currentQuestion.answers.map((answer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className={`answer-button ${selectedAnswerIndex === index ? answerFeedback : ''}`}
                onClick={() => handleAnswer(answer.isCorrect, index)}
                fullWidth
              >
                {answer.text}
              </Button>
            </motion.div>
          ))}
        </Box>
        {answerFeedback && (
          <Typography variant="h6" color={answerFeedback === 'correct' ? 'green' : 'red'}>
            {answerFeedback === 'correct' ? 'Correct! Well done!' : 'Incorrect! Try again!'}
          </Typography>
        )}
        <Box mt={3}>
          <LinearProgress variant="determinate" value={(timeLeft / 10) * 100} />
          <Typography variant="h6">Time Left: {timeLeft}s</Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="h6">Correct Answers: {correctAnswers}</Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Trivia;