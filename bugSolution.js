const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Simulate potential error
      // const result = 10 / 0; 
      res.send('Hello, World!');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 5000); 
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});