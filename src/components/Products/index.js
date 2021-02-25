import {useSelector} from 'react-redux'

import Product from "../Product";

const Products = () => {
  const products = useSelector(state => state.products);

  return (
    <div>
      <h2>Produtos</h2>
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
