var books = [
  {
    isbn: '9781642591699',
    title: 'A People\'s Guide To Capitalism',
    author: 'Hadas Thier'
  },
  {
    isbn: '0261103660',
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien'

  },
  {
    isbn: '0802141447',
    title: 'Monster: The Autobiography of an LA Gang Member',
    author: 'Sanyika Shakur'
  }];

console.log('typeff books:', typeof books);

var stringified = JSON.stringify(books);
console.log(stringified);
console.log('typeof JSON books:', typeof stringified);

var string = '{ "Number ID": "123456", "String name": "Nick Sturz" }';
console.log('string typeof:', typeof string);

var parsed = JSON.parse(string);
console.log('typeof string:', typeof parsed);
