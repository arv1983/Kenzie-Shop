import { useSelector } from "react-redux";

import Product from "../Product";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Meu carrinho de compras</h1>
      {cart.map((product, index) => (
        <Product key={index} product={product} isRemovable />
      ))}
      <label>Total - </label>
      <label>{cart.reduce((acc, product) => acc + product.price, 0)}</label>
    </div>
  );
};

export default Cart;
