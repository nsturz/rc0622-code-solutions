const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const studentGrades = [];
  studentGrades.push(grades);
  res.json(studentGrades);
});

const expressJSON = express.json();

app.use(expressJSON);

app.post('/api/grades', (req, res) => {
  res.status(201);
  nextId++;
  req.body.id = nextId;
  res.json(req.body);
});
