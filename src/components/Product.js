import { increment, decrement } from "../actions";
import { useDispatch } from "react-redux";


export default function AddButtons() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
    </>
  );
};

