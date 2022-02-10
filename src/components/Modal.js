const Modal = props => {
 

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <h3 className="modal_title">{props.title}</h3>
                    <button className="moda_close_button squaredButton" onClick={props.onClose}>X</button>
                </div>
                <div className="modal_body">{props.children}</div>
            </div>
        </div>
    )
}

export default Modal;