import React from "react";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import RouteProtected from "./components/RouteProtected";
import { AuthProvider } from "./context/AuthProvider";
import Error404 from "./components/Error404";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={
            <RouteProtected>
              <Home />
            </RouteProtected>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />}/> 
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;