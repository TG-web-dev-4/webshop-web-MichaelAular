import { addToCart } from "../actions";
import Colorselector from "./Colorselector";
import Sizeselector from "./Sizeselector";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductCompose = ({ item }) => {
const [color, setColor] = useState('')
const [size, setSize] = useState('')

  return (
    <Div>
      <Colorselector setColor={setColor} selectionArray={item.colors} />
      <Sizeselector setSize={setSize} selectionArray={item.size} />
      <button className="addButton" onClick={() => dispatch(addToCart(item.id, ))} >BUY NOW!</button>

    </Div>
  );
};
