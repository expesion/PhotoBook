import React from "react";
import "./FlowerCard.scss";
function FlowerCard(props) {
  const { url, comments, likes, category } = props;
  return (
    <div style={{border:"1px solid #5141d2",margin:"0 27%"}}>
      <span>
        <img style={{maxWidth:'100%'}} src={url} alt={category}/>
      </span>
      <span className="actions">
        <p>{likes}</p>
        <p style={{ cursor: "pointer" }}>Like</p>
        <p>{category}</p>
      </span>
      <span className="comment">
        <input type="text" placeholder="Type your comment here..." />
        <p>POST</p>
      </span>
    </div>
  );
}

export default FlowerCard;
