import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INITIALIZE } from "./Store/constants/action-types";
import Action from "./Nav";
import "./Body.scss";
import FlowerContainer from "./FlowerContainer";
import Modal from "./Modal";
function Body() {
  const modal = useSelector((state) => state.modal);
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
      <Modal src={modal.url} show={modal.show} showHideClassName="" />
      <h1 className="heading" >
        PhotoBook
      </h1>
      <Action />
      <FlowerContainer />
    </div>
  );
}

export default Body;
