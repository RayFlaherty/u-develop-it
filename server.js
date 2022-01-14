const db = require('./db/connection');
const express = require('express');
const inputCheck = require('./utils/inputCheck');





const PORT = process.env.PORT || 3001;
const app = express();




// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});