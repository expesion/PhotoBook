import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { INITIALIZE } from "./Store/constants/action-types";
import Action from "./Nav";
import FlowerContainer from "./FlowerContainer";
function Body() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      let req = await fetch(
        `https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json`
      );
      let data = await req.json();
      console.log(data["pics"]);
      dispatch({ type: INITIALIZE, payload: data["pics"] });
    }
    fetchData();
  }, [dispatch]);
  return (
    <div>
      <h1>PhotoBook</h1>
      <Action />
      <FlowerContainer />
    </div>
  );
}

export default Body;
