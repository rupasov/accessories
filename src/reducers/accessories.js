import { SAVE_PRODUCTS } from '../constants';
import { fromPairs, map } from 'lodash';
const initState = {
  products: null,
  selectedColors: []
};

const accessories = (state = initState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.products,
        selectedColors: fromPairs(
          map(
            action.products.map(product => ({
              key: [product.id],
              val: Object.keys(product.colours)[0]
            })),
            i => [i.key, i.val]
          )
        )
      };
    default:
      return state;
  }
};

export default accessories;
