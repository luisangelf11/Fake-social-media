import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Profile from "./Profile";
import UserPhoto from "../img/user.png";
import Menu from "./Menu";
import Content from "./Content";
import "../components/Home.css";
import Loader from "./Loader";

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    //change the value of the state after 4s
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading === true ? (
        <Loader />
      ) : (
        <div className="container">
          <Menu />
          <Content />
          <Profile
            username={user.displayName || user.email}
            urlImg={UserPhoto}
          />
        </div>
      )}
    </>
  );
}
