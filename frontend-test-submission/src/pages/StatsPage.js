import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const StatsPage = () => {
  const stats = [
    {
      short: 'http://localhost:3000/abc123',
      created: '2025-08-01 10:00',
      expiry: '2025-08-01 10:30',
      clicks: 5,
      clickDetails: [
        { time: '2025-08-01 10:05', source: 'Google', location: 'India' },
        { time: '2025-08-01 10:10', source: 'LinkedIn', location: 'India' }
      ]
    }
  ];

  return (
    <Box p={4}>
      <Typography variant="h4">Analytics</Typography>
      {stats.map((stat, idx) => (
        <Card key={idx} sx={{ m: 2 }}>
          <CardContent>
            <Typography>Short URL: {stat.short}</Typography>
            <Typography>Created: {stat.created}</Typography>
            <Typography>Expires: {stat.expiry}</Typography>
            <Typography>Total Clicks: {stat.clicks}</Typography>
            <Typography>Click Details:</Typography>
            {stat.clickDetails.map((click, i) => (
              <Typography key={i}>- {click.time} | {click.source} | {click.location}</Typography>
            ))}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default StatsPage;
