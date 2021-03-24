import React, { useState } from "react";
import "./FlowerCard.scss";
import uuid from "react-uuid";
function FlowerCard(props) {
  const {
    url,
    comments,
    likes,
    category,
    toggleLike,
    id,
    likeStatus,
    postComment,
  } = props;
  const [comment, setComment] = useState("");
  return (
    <div style={{ border: "1px solid #5141d2", margin: "15px 27%" }}>
      <span>
        <img style={{ maxWidth: "100%" }} src={url} alt={category} />
      </span>
      <span className="actions">
        <p style={{ color: "red" }}>{likes}</p>
        <p
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "#0b83ec",
          }}
          onClick={() => toggleLike(id)}
        >
          {likeStatus}
        </p>
        <p>{category}</p>
      </span>
      <span className="comment">
        <input
          type="text"
          placeholder="Type your comment here..."
          onKeyUp={(e) => setComment(e.target.value)}
        />
        <p
          style={{ cursor: "pointer" }}
          onClick={() => postComment(comment, id)}
        >
          POST
        </p>
      </span>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={uuid()}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default FlowerCard;
