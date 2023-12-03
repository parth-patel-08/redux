import { SET_USERS } from "../actionTypes";

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();

      dispatch({
        type: SET_USERS,
        payload: users,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
