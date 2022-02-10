import { increment, decrement } from "../actions";
import { useDispatch } from "react-redux";


export default function AddButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="AddtocartButtons" onClick={() => dispatch(increment())} >+</button>
      <button className="AddtocartButtons" onClick={() => dispatch(decrement())} >-</button>
    </>
  );
};

