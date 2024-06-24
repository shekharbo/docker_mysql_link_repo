const express = require('express');
const mysql = require('mysql2');  // MySQL driver

const app = express();

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'db',          // Docker Compose service name
  user: 'root',
  password: 'password',
  database: 'mydb'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Example endpoint
app.get('/', (req, res) => {
  connection.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error querying MySQL:', err);
      res.status(500).send('Error querying MySQL');
      return;
    }
    res.json(results);
  });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
