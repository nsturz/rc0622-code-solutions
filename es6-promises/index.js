const takeAChance = require('./take-a-chance');

const promiseNick = takeAChance('Nick');

promiseNick.catch(error => {
  console.error(error);
});

promiseNick.then(value => {
  console.log(value);
});
