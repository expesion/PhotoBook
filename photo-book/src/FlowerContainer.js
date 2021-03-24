import React, { useEffect, useState } from "react";
import FlowerCard from "./FlowerCard";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_LIKE } from "./Store/constants/action-types";
import { addComment } from "./Store/Actions";
import "./FlowerContainer.scss";
function FlowerContainer() {
  let globalFlowers = useSelector((state) => state.flowers);
  const [flowers, setFlowers] = useState([]);
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();
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
  return (
    <div className="flowers">
      {flowers.map((flower, i) => (
        <FlowerCard
          key={i}
          category={flower.category}
          comments={flower.comments}
          likes={flower.likes}
          url={flower.url}
          toggleLike={toggleLike}
          id={i}
          likeStatus={flower.likeStatus}
          postComment={postComment}
        />
      ))}
    </div>
  );
}

export default FlowerContainer;
