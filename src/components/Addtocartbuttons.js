import { increment, decrement } from "../actions";
import { useDispatch } from "react-redux";


export default function AddButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="squaredButton" onClick={() => dispatch(increment())} >+</button>
      <button className="squaredButton" onClick={() => dispatch(decrement())} >-</button>
    </>
  );
};

