export const getProducts = () =>
  fetch('http://localhost:3333/products')
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
