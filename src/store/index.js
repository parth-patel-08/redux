import { createStore, combineReducers } from "redux";

import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import iceCreamReducer from "./reducers/iceCream";
import cakeReducer from "./reducers/cake";
import userReducer from "./reducers/user";

const combinedReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
  users: userReducer,
});

const store = createStore(combinedReducer, applyMiddleware(thunkMiddleware));

export default store;
