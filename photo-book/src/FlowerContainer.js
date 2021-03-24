import React, { useEffect, useState } from "react";
import FlowerCard from "./FlowerCard";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_LIKE } from "./Store/constants/action-types";
import { addComment, deleteComment, toggleModal } from "./Store/Actions";
import "./FlowerContainer.scss";
function FlowerContainer() {
  let globalFlowers = useSelector((state) => state.flowers);
  const [flowers, setFlowers] = useState([]);
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener("click", clickModal);
    return () => document.removeEventListener("click", clickModal);
  });
  useEffect(() => {
    setFlowers(
      globalFlowers.filter((flower) =>
        flower.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    console.log(flowers);
  }, [searchTerm]);
  useEffect(() => {
    setFlowers(globalFlowers);
  }, [globalFlowers]);
  const toggleLike = (id) => {
    console.log(id);
    dispatch({ type: TOGGLE_LIKE, payload: id });
  };
  const postComment = (comment, id) => {
    dispatch(addComment({ comment, id }));
  };
  const dltComment = (id, commentId) => {
    dispatch(deleteComment({ id, commentId }));
  };
  const imageClick = (id) => {
    dispatch(toggleModal({ id }));
  };
  const clickModal = (e) => {
    console.log(!!e.path[0].src);
    if (!!!e.path[0].src) {
      dispatch(toggleModal());
    }
  };
  return (
    <div className="flowers">
      {flowers.map((flower, i) => (
        <FlowerCard
          key={uuid()}
          category={flower.category}
          comments={flower.comments}
          likes={flower.likes}
          url={flower.url}
          toggleLike={toggleLike}
          id={i}
          likeStatus={flower.likeStatus}
          postComment={postComment}
          deleteComment={dltComment}
          imageClick={imageClick}
        />
      ))}
    </div>
  );
}

export default FlowerContainer;
