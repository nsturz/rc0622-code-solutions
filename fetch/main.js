const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/6')
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(console.error);

console.log('fetch request:', pokemon);
