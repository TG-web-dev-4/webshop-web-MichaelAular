import { increment, decrement } from "../actions";
import { useDispatch } from "react-redux";


export default function AddButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="CartButtons" onClick={() => dispatch(increment())} >+</button>
      <button className="CartButtons" onClick={() => dispatch(decrement())} >-</button>
    </>
  );
};

