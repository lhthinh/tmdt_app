import { Col, Row, Space } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";
import { Carousel } from "antd";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { UilMapMarker } from "@iconscout/react-unicons";
import { UilCarSideview } from "@iconscout/react-unicons";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
export default function Header() {
  const navigate = useNavigate();
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
          <div className="dam">
            <UilMapMarker />
            <p className="txt-header">Store Locator</p>
          </div>
          <div className="bordercol"></div>
          <div className="dam">
            <UilCarSideview />
            <p className="txt-header">Track Your Oder</p>
          </div>
          <div className="bordercol1"></div>
          <div className="dam">
            <UilShoppingCartAlt />
            <p className="txt-header">Shop</p>
          </div>
          <div className="bordercol2"></div>
          <div className="dam">
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
            <input className="boder" type={"text"} />
          </Col>
        </Row>
      </div>
      <div className="center">
        <Space>
          <div
            className="action-click"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Blog
          </div>
          <div className="action-click">Contact Us</div>
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
