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
  for (const keys in grades) {
    studentGrades.push(grades[keys]);
  }
  res.json(studentGrades);
});

const expressJSON = express.json();

app.use(expressJSON);

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades[req.body.id] = req.body;
  res.status(201).json(req.body);
});
