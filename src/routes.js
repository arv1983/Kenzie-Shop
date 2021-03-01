import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Products";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/carrinho" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
