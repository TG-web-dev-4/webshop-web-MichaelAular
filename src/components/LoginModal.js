import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Login";
import Register from "./register";

const LoginModal = (props) => {
  const [user, loading] = useAuthState(auth);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);

  return (
    <div
      className={`modal ${props.showLogin ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <div className="modal_header">
          {showRegister ? (
            <h3 className="modal_title">Register</h3>
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
        <Register setShowRegister={setShowRegister}/>
        ) : (
          <>
        <Login setShowRegister={setShowRegister}/>
        </>
        )}

      </div>
    </div>
  );
};

export default LoginModal;
