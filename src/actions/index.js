import { SAVE_PRODUCTS, CHANGE_COLOR } from '../constants';
import { getProducts } from '../util/requests';

export const fetchProducts = () => dispatch =>
  getProducts()
    .then(products => dispatch(saveProducts(products)))
    .catch(e => console.log(`Something went wrong: ${e}`));

const saveProducts = products => ({
  type: SAVE_PRODUCTS,
  products
});

export const changeColor = (productId, colorId) => ({
  type: CHANGE_COLOR,
  productId,
  colorId
});
