import { SAVE_PRODUCTS } from '../constants';

const initState = {
  products: null
};

const accessories = (state = initState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
};

export default accessories;
