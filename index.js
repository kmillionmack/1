// app.js
import express from 'express';
const app = express();
const port = 9000;

// Sample JSON data
const jsonData = {
  url: 'Hello, JSON API!',
  data: {
    name: 'John Doe',
    age: 30,
    city: 'Example City',
  },
};

// Define a route that returns JSON data
app.get('/', (req, res) => {
  res.json(jsonData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
