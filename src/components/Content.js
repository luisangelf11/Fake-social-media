import React, { useEffect, useState } from "react";
import "../components/Content.css";
import Post from "./Post";
import Profile from "../img/user.png";

export default function Content() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setPosts(json);
      //console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <h2>Home / POST</h2>
      <div className="posts">
        {posts.map((el) => (
          <Post
            key={el.id}
            idPost={el.id}
            urlPhoto={Profile}
            msj={el.body}
            idUser={el.userId}
          />
        ))}
      </div>
    </div>
  );
}
