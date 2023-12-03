import { PURCHASE_ICE_CREAM, STOCK_ICE_CREAM } from "../actionTypes";

const initialState = {
  numberOfIceCreams: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    case PURCHASE_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - action.payload,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
