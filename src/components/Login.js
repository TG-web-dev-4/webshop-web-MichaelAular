import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logInWithEmailAndPassword, signInWithGoogle } from "../firebase";

const Login  = ({setShowRegister, setShowReset}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div className="login">
          <div className="login__container">
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <button
              className="login__btn login__google"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
            <div>
              <button className="forgotPasswordButton" onClick={() => setShowReset(true)}>Forgot Password</button>{" "}
            </div>
            <div>
              Don't have an account?{" "}
              <button className="registerButton" onClick={() => setShowRegister(true)}>Register now</button>{" "}
            </div>
          </div>
        </div>
      )
}

export default Login;