import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleDelCart = () => {
    dispatch(emptyCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-5 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="bg-black text-white py-1 px-4 rounded-lg"
        onClick={handleDelCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto">
        <ItemsList itemData={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
