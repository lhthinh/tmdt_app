import {
  UilCarSideview,
  UilMapMarker,
  UilShoppingCartAlt,
  UilUser,
  UilSearch,
} from "@iconscout/react-unicons";
import { Carousel, Col, Input, Row, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { show } from "../../components/Login/LoginSlice";
import "./header.scss";
const { Search } = Input;
const suffix = (
  <UilSearch
    style={{
      fontSize: 16,
      color: "yellow",
    }}
  />
);
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => {
    dispatch(show());
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "10px",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <div className="header">
        <Space>
          <div
            className="dam action-click"
            onClick={() => {
              navigate("/");
            }}
          >
            <UilMapMarker />
            <p className="txt-header">Store Locator</p>
          </div>
          <div className="bordercol"></div>
          <div className="dam action-click">
            <UilCarSideview />
            <p className="txt-header">Track Your Oder</p>
          </div>
          <div className="bordercol1"></div>
          <div className="dam action-click">
            <UilShoppingCartAlt />
            <p className="txt-header">Shop</p>
          </div>
          <div className="bordercol2"></div>
          <div className="dam action-click" onClick={handleOpen}>
            <UilUser />
            <p className="txt-header">My Account</p>
          </div>
        </Space>
      </div>
      <hr />
      <div>
        <Row>
          <Col span={6}>
            <h1 className="title-text">ASICC</h1>
          </Col>
          <Col span={12} offset={1}>
            <Search placeholder="input search text" enterButton />
          </Col>
        </Row>
      </div>
      <div className="center">
        <Space style={{ gap: 50 }}>
          <div
            className="action-click"
            onClick={() => {
              navigate("/");
            }}
          >
            Trang chủ
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/about");
            }}
          >
            Về chúng tôi
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Tin tức
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Liên hệ
          </div>
        </Space>
      </div>
      <div>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
