import { PURCHASE_ICE_CREAM, STOCK_ICE_CREAM } from "../actionTypes";

export const purchaseIceCream = (count) => {
  return {
    type: PURCHASE_ICE_CREAM,
    payload: count,
  };
};

export const stockIceCream = (count) => {
  return {
    type: STOCK_ICE_CREAM,
    payload: count,
  };
};
