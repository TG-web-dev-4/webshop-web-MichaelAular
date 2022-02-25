import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Register from "./register";
import Reset from "./Reset";
// import Reset from "./ResetModal";

const LoginModal = (props) => {
  const [user, loading] = useAuthState(auth);
  const [showRegister, setShowRegister] = useState(false);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);

  let reset;
  if (showReset) reset = <Reset setShowRegister={setShowRegister}/>

  return (
    <div
      className={`modal ${props.showLogin ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          {showRegister ? (
            <h3 className="modal_title">Register</h3>
          ) :
          showReset ? (
            <h3 className="modal_title">Reset</h3>
          ) : (
            <h3 className="modal_title">Login</h3>
          )}
          <button
            className="modal_close_button squaredButton"
            onClick={props.onClose}
          >
            X
          </button>
        </div>
        {showRegister ? (
        <Register setShowRegister={setShowRegister} setShowReset={setShowReset} showReset={showReset} />
        ) :
        showReset ? (
          reset
        ) : (
        <Login setShowRegister={setShowRegister} setShowReset={setShowReset} />
        )}

      </div>
    </div>
  );
};

export default LoginModal;
