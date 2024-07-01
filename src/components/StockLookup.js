import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box, CircularProgress } from '@mui/material';

const StockLookup = () => {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY; // Use environment variable

  const handleLookup = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://www.alphavantage.co/query`, {
        params: {
          function: 'GLOBAL_QUOTE',
          symbol: symbol,
          apikey: apiKey
        }
      });

      if (response.data['Global Quote'] && Object.keys(response.data['Global Quote']).length > 0) {
        setStockData(response.data['Global Quote']);
      } else {
        setError('Invalid stock symbol');
      }
    } catch (err) {
      setError('Error fetching stock data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Typography variant="h4">Stock Lookup</Typography>
        <TextField
          label="Enter Stock Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLookup}
          fullWidth
        >
          Look Up
        </Button>

        {loading && <CircularProgress mt={3} />}

        {error && (
          <Typography variant="h6" color="error" mt={3}>
            {error}
          </Typography>
        )}

        {stockData && !loading && (
          <Box mt={3}>
            <Typography variant="h6">Symbol: {stockData['01. symbol']}</Typography>
            <Typography variant="h6">Price: ${stockData['05. price']}</Typography>
            <Typography variant="h6">Volume: {stockData['06. volume']}</Typography>
            <Typography variant="h6">Change: {stockData['09. change']}</Typography>
            <Typography variant="h6">Change Percent: {stockData['10. change percent']}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default StockLookup;