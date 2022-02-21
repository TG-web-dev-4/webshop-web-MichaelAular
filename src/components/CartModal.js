import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../actions";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

const CartModal = (props) => {
  const cart = useSelector((state) => state.shopReducer.cart);
  const dispatch = useDispatch();

  const itemInCart = cart.map((item) => (
    <div key={uuid()} value={item}>
      <div className="cartitem_name">{item.name}</div>
      <div className="cartitem_info">
        <div className="info_text">
          <p>color: {item.color}</p>
          <p>size: {item.size}</p>
          <p>price: €{item.price}</p>
          <p>quantity: 1</p>
          <button
            className="fas fa-trash"
            onClick={() => dispatch(removeFromCart(item.unique_id))}
          />
        </div>
        <div className="info_img">
          <Link to={`../productpage/${item.id}`}>
            <img
              className="cartitem_img"
              src={require(`../images/photo/${item.img}`)}
            />
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          <h3 className="modal_title">{props.title}</h3>
          <button
            className="modal_close_button squaredButton"
            onClick={props.onClose}
          >
            X
          </button>
        </div>
        <div className="modal_body">{itemInCart}</div>
      </div>
    </div>
  );
};

export default CartModal;
