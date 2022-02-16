import { addShoppingBag, removeShoppingBag } from "../actions";
import { useDispatch } from "react-redux";


export default function AddButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="squaredButton" onClick={() => dispatch(addShoppingBag())} >+</button>
      <button className="squaredButton" onClick={() => dispatch(removeShoppingBag())} >-</button>
    </>
  );
};

