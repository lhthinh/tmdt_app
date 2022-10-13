import { Col, Row, Space } from "antd";
import Column from "antd/lib/table/Column";
import React from "react";
import { Carousel } from "antd";
import "./header.scss";
export default function Header() {
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
          <div>Home</div>
          <br />
          <br />
          <div>About</div>
          <br />
          <br />
          <div>Blog</div>
          <br /> <br />
          <div>Contact Us</div>
        </Space>
      </div>
      <br />

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
