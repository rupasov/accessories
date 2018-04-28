import { SAVE_PRODUCTS } from '../constants';
import { getProducts } from '../util/requests';

export const fetchProducts = () => dispatch =>
  getProducts()
    .then(products => dispatch(saveProducts(products)))
    .catch(e => console.log(`Something went wrong: ${e}`));

export const saveProducts = products => ({
  type: SAVE_PRODUCTS,
  products
});
