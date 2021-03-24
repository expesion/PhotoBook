import React from "react";
import FlowerCard from "./FlowerCard";
import { useSelector } from "react-redux";
import "./FlowerContainer.scss";
function FlowerContainer() {
  const flowers = useSelector((state) => state.flowers);
  return (
    <div className="flowers">
      {flowers.map((flower, i) => (
        <FlowerCard
          key={i}
          category={flower.category}
          comments={flower.comments}
          likes={flower.likes}
          url={flower.url}
        />
      ))}
    </div>
  );
}

export default FlowerContainer;
