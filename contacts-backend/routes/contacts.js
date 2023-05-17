// routes/contacts.js
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// MySQL connection
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Add a contact
router.post('/', (req, res) => {
  const { firstName, lastName, company, jobTitle, email, phoneNumber } = req.body;
  const query = `INSERT INTO Contacts (firstName, lastName, company, jobTitle, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [firstName, lastName, company, jobTitle, email, phoneNumber], (err, result) => {
    if (err) throw err;
    res.send('Contact added');
  });
});

// Get all contacts
router.get('/', (req, res) => {
  db.query('SELECT * FROM Contacts', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Search contacts by a text string in first or last name
router.get('/search', (req, res) => {
  const { name } = req.query;
  const query = `SELECT * FROM Contacts WHERE firstName LIKE ? OR lastName LIKE ?`;
  db.query(query, [`%${name}%`, `%${name}%`], (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
