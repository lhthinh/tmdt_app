import React, { useState } from "react";
import Home2Content from "./Home2Content";
import "./HomeContent.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, amountAdded } from "../../features/counter/counter-slice";
export default function HomeContent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(amountAdded(5));
  };
  return (
    <div className="txt-sass">
      test css {count}
      <button onClick={handleClick}>click me</button>
      <Home2Content />
    </div>
  );
}
