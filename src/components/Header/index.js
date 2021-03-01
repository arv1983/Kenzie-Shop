import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.length);
  return (
    <div>
      <h1>carrinho qtd {cart.length}</h1>
      <Link to="/carrinho"> editar </Link>
      <hr />
    </div>
  );
};

export default Header;
