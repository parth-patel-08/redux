import { PURCHASE_CAKE, STOCK_CAKE } from "../actionTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    case PURCHASE_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default cakeReducer;
