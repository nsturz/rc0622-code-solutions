const fs = require('fs');

const note = process.argv[2];

fs.writeFile('note.txt', note + '\n', err => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.log('note:', note);
});
