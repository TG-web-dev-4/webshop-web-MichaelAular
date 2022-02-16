import { addToCart, removeFromCart, } from "../actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function AddButtons() {
  const params = useParams()
  console.log(params)
  const id =  Number(params.id)
  console.log(id)
  const dispatch = useDispatch();


  return (
    <>
      <button className="squaredButton" onClick={() => dispatch(addToCart(id))} >+</button>
      <button className="squaredButton" onClick={() => dispatch(removeFromCart())} >-</button>
    </>
  );
};

