import { BASE_API_URL } from '../constants';

export const getProducts = () =>
  fetch(`${BASE_API_URL}/products`)
    .then(res => res.json())
    .catch(e => console.log(`Something went wrong ${e}`));
