import { Carousel, Col, Row, Card } from "antd";
import React, { useState } from "react";
import "./HomeContent.scss";
import { useSelector, useDispatch } from "react-redux";
import { show, unshow } from "../Login/LoginSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
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
    <div>
      test css {visible} <FontAwesomeIcon icon={faCoffee} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
