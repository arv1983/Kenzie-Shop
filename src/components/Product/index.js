import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/modules/cart/actions";
import { addToCartThunk } from "../../store/modules/cart/thunk";
const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{product.name}</h3>
      <h2>{product.price}</h2>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCart(product.id))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar item ao carrinho
        </button>
      )}
    </div>
  );
};

export default Product;
