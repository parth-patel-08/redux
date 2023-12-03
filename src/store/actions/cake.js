import { PURCHASE_CAKE, STOCK_CAKE } from "../actionTypes";

export const purchaseCake = (count) => {
  return {
    type: PURCHASE_CAKE,
    payload: count,
  };
};

export const stockCake = (count) => {
  return {
    type: STOCK_CAKE,
    payload: count,
  };
};
