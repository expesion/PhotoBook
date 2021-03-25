import React from "react";
import {mostCommented,mostLiked} from "./Store/Actions"
import {useDispatch} from "react-redux";
import {searchCategory} from "./Store/Actions"
import "./Nav.scss";
function Actions() {
  const dispatch = useDispatch();
  const liked=()=>{
    dispatch(mostLiked())
  }
  const commented=()=>{
    dispatch(mostCommented())
  }
  const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
  }
  const onSearch=(search)=>{
    dispatch(searchCategory(search))
  }
  return (
    <div className="nav">
      <span className="nav-left">
        <p onClick={liked} id="nav">Most Liked</p>
        <p>|</p>
        <p onClick={commented} id="nav">Most Commented</p>
      </span>
      <span className="nav-centre">
        <input id="searchImage" placeholder="Search images..." onKeyUp={debounce((e)=>onSearch(e.target.value),400)}/>
      </span>
    </div>
  );
}

export default Actions;
