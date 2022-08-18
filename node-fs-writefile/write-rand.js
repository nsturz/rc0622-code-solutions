const fs = require('fs');

const randomNumber = Math.random();

fs.writeFile('random.txt', randomNumber + '\n', 'utf8', err => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.log('random number: ', Math.random());
});
