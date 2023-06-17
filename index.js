const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 4000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route handler for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
