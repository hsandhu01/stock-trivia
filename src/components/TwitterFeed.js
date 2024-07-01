import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const TwitterFeed = ({ handles }) => {
  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Typography variant="h4">Twitter Feeds</Typography>
        {handles.map(handle => (
          <Box mt={3} key={handle}>
            <Typography variant="h5">@{handle}</Typography>
            <a
              className="twitter-timeline"
              href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`}
            >
              Tweets by @{handle}
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TwitterFeed;