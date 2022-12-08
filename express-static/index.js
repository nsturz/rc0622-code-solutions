const express = require('express');
const path = require('path');
const app = express();

const joined = path.join('_dirname', 'public');
console.log(joined);

const publicDirectory = express.static('public');
console.log(publicDirectory);
app.use(publicDirectory);

app.listen(3000, () => {
  console.log('Listening on PORT 3000');
});
