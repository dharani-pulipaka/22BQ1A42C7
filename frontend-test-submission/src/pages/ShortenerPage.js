import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card, CardContent } from '@mui/material';
import { log } from '../utils/logger';

const ShortenerPage = () => {
  const [urls, setUrls] = useState([{ url: '', code: '', validity: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const newUrls = [...urls];
    newUrls[index][field] = value;
    setUrls(newUrls);
  };

  const addUrlField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { url: '', code: '', validity: '' }]);
    }
  };

  const handleShorten = async () => {
    log("frontend", "info", "component", "Shorten button clicked");
    try {
      const newResults = urls.map((item, index) => ({
        original: item.url,
        short: `http://localhost:3000/${item.code || 'abc' + index}`,
        expiresAt: new Date(Date.now() + (parseInt(item.validity || '30') * 60000)).toLocaleString(),
      }));
      setResults(newResults);
      log("frontend", "info", "component", "Short URLs generated successfully");
    } catch (err) {
      log("frontend", "error", "component", "Shortening failed: " + err.message);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4">URL Shortener</Typography>
      {urls.map((item, index) => (
        <Card key={index} sx={{ m: 2, p: 2 }}>
          <CardContent>
            <TextField label="Long URL" fullWidth margin="dense" value={item.url}
              onChange={(e) => handleChange(index, 'url', e.target.value)} />
            <TextField label="Custom Code (optional)" fullWidth margin="dense" value={item.code}
              onChange={(e) => handleChange(index, 'code', e.target.value)} />
            <TextField label="Validity (minutes, default 30)" fullWidth margin="dense" value={item.validity}
              onChange={(e) => handleChange(index, 'validity', e.target.value)} />
          </CardContent>
        </Card>
      ))}
      <Button onClick={addUrlField} disabled={urls.length >= 5}>Add Another</Button>
      <Button variant="contained" onClick={handleShorten}>Shorten URLs</Button>

      {results.map((res, idx) => (
        <Box key={idx} mt={2}>
          <Typography>Original: {res.original}</Typography>
          <Typography>Short: <a href={res.short}>{res.short}</a></Typography>
          <Typography>Expires At: {res.expiresAt}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ShortenerPage;
