const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
