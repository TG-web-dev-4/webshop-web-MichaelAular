import { addToCart, removeFromCart, } from "../actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function AddButtons({item}) {

  const dispatch = useDispatch();


  return (
    <>
      <button className="addButton" onClick={() => dispatch(addToCart(item))} >BUY NOW!</button>
    </>
  );
};

