import { Avatar, Card, Col, Row } from "antd";
import React from "react";
import "./HomeContent.scss";
import { useSelector, useDispatch } from "react-redux";
import { show, unshow } from "../Login/LoginSlice";
export default function HomeContent() {
  const visible = useSelector((state) => state.login.visible);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(show());
  };
  const handleCancel = () => {
    dispatch(unshow());
  };
  console.log(visible);
  return (
    <div className="txt-sass">
      test css {visible}
      <button onClick={handleClick}>click me</button>
      <Home2Content />
    </div>
  );
}
