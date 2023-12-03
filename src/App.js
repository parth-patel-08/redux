import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchaseIceCream, stockIceCream } from "./store/actions/iceCream";
import { purchaseCake, stockCake } from "./store/actions/cake";
import { fetchUsers } from "./store/asyncActions/user";

function App() {
  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const { users } = useSelector((state) => state.users);

  const [products, setProducts] = useState({
    iceCreamsStocked: 0,
    iceCreamsPurchased: 0,
    cakeStocked: 0,
    cakePurchased: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProducts({
      ...products,
      [e.target.name]: +e.target.value,
    });
  };

  const stockIceCreams = () => {
    dispatch(stockIceCream(products.iceCreamsStocked));
  };

  const purchaseIceCreams = () => {
    if (numberOfIceCream - products.iceCreamsPurchased >= 0) {
      dispatch(purchaseIceCream(products.iceCreamsPurchased));
    }
  };

  const stockCakes = () => {
    dispatch(stockCake(products.cakeStocked));
  };

  const purchaseCakes = () => {
    if (numberOfCakes - products.cakePurchased >= 0) {
      dispatch(purchaseCake(products.cakePurchased));
    }
  };

  return (
    <>
      Number Of Ice-cream: {numberOfIceCream} <br />
      <input
        type="text"
        placeholder="enter number of ice-cream to stock"
        name="iceCreamsStocked"
        value={products.iceCreamsStocked}
        onChange={handleChange}
      />
      <button onClick={stockIceCreams}>Stock IceCreams</button>
      <br />
      <input
        type="text"
        placeholder="enter number of purchased ice-cream"
        name="iceCreamsPurchased"
        value={products.iceCreamsPurchased}
        onChange={handleChange}
      />
      <button onClick={purchaseIceCreams}>Purchase IceCreams</button>
      <br />
      Number Of Ice-cream: {numberOfCakes}
      <br />
      <input
        type="text"
        placeholder="enter number of cakes to stock"
        name="cakeStocked"
        value={products.cakeStocked}
        onChange={handleChange}
      />
      <button onClick={stockCakes}>Stock Cakes</button>
      <br />
      <input
        type="text"
        placeholder="enter number of purchased cakes"
        name="cakePurchased"
        value={products.cakePurchased}
        onChange={handleChange}
      />
      <button onClick={purchaseCakes}>Purchase Cakes</button>
      <br />
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
