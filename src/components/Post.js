import React, { useEffect, useState } from "react";
import "../components/Post.css";
import { BiCommentDetail, BiShare, BiLike } from "react-icons/bi";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

export default function Post({ urlPhoto, msj, idUser, idPost }) {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const { openId, openModalId, closeModal } = useModal();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${idUser}`
      );
      const json = await res.json();
      setData(json.email);
      //console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  const getComments = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const json = await res.json();
      setComments(json);
      //console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  const OpenModal = (id) => {
    openModalId(id);
    //console.log(id);
    getComments(id);
  };

  return (
    <div className="postCon">
      <div className="box-top">
        <img src={urlPhoto} alt="profile" />
        <h4>{data}</h4>
      </div>
      <p>{msj}.</p>
      <div className="box-icons">
        <BiCommentDetail
          onClick={() => OpenModal(idPost)}
          className="iconPost"
        />
        <BiShare className="iconPost" />
        <BiLike className="iconPost" />
      </div>
      <Modal CloseModal={closeModal} openId={openId} elementId={idPost}>
        <h3>Post - {data}</h3>
        {comments.map((el) => (
          <div className="postCon" key={el.id}>
            <div className="box-top">
              <img src={urlPhoto} alt="profile" />
              <h4>{el.email}</h4>
            </div>
            <p>{el.body}.</p>
            <div className="box-icons">
              <BiCommentDetail
                className="iconPost"
              />
              <BiShare className="iconPost" />
              <BiLike className="iconPost" />
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
}
