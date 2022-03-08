import { addToCart } from "../actions";
import { useDispatch } from "react-redux";

export default function AddButton({item}) {
  const dispatch = useDispatch();
  return (
      <button className='addButton' onClick={() => dispatch(addToCart(item))}>
        BUY NOW!
      </button>
  );
}
