import { Col, Row, Space } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";
import { Carousel } from "antd";
import "./header.scss";
import { useNavigate } from "react-router-dom";
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
          <div>Store Locator</div>
          <div>Track Your Oder</div>
          <div>Shop</div>
          <div>My Account</div>
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
          <div className="action-click">Blog</div>
          <div className="action-click">Contact Us</div>
        </Space>
      </div>
      <div>
        {" "}
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
