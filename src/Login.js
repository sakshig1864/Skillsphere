import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/assessment");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful! You can now login.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      {/* Geometric shapes for background decoration */}
      <div className="geometric-shape shape-1"></div>
      <div className="geometric-shape shape-2"></div>
      <div className="geometric-shape shape-3"></div>

      <div className="login-box">
        <div className="login-header">
          <h1>SkillSphere</h1>
          <p>Welcome to the future of learning</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password (6+ characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {error && <p className="error">{error}</p>}
        </form>

        <div className="signup-link">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-button"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
