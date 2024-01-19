import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./login.css";
function Login() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="login__form">
      <div className="login__form-wrapper">
        <h1 className="login__form-logo">ChatBox</h1>
        <h2 className="login__form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            className="login__form-input"
          />
          <input
            type="password"
            placeholder="Enter  password"
            className="login__form-input"
          />
          <button className="login__form-btn">Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p className="login__form-text">
          You don`t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
