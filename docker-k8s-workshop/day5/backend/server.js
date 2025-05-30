// backend/server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
