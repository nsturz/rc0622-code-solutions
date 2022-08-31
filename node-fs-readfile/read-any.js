const file = process.argv[2];
console.log('file:', file);

const fs = require('fs');
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;

  console.log('file:', data);
});
