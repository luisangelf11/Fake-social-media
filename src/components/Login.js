import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import '../components/Login.css'
import Alert from "./Alert";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const clickLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/Fake-social-media");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="box-login">
      {error && <Alert msj={error} />}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button className="loginBtn">Login</button>
      </form>
      <p>
        Don't have an account? <Link className="url" to="/Fake-social-media/register">Register</Link>
      </p>
      <button className="google" onClick={clickLoginWithGoogle}>Login with Google</button>
    </div>
  );
}
