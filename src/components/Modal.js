const Modal = (props) => {

  console.log(props)
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
            onClick={props.onClose}>
            X
          </button>
        </div>
        <div className="modal_body">
          totaal items:{props.count}</div>
      </div>
    </div>
  );
};

export default Modal;
