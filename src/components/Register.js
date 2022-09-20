import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../context/AuthProvider'
import '../components/Register.css'
import Alert from "./Alert";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const {signup} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await signup(user.email, user.password);
      navigate("/");

    }
    catch(err){
      setError(err.message);
    }
  };
  return (
    <div className="box-register">
      {error && <Alert msj={error} />}
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
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
        <button className="registerBtn">Register</button>
      </form>
      <p>
        Already have an account? <Link className="url" to="/Fake-social-media/login">Login</Link>
      </p>
    </div>
  );
}
