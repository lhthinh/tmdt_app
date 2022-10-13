import { Carousel, Col, Row, Card } from "antd";
import React, { useState } from "react";
import hinh from "../../assets/image/hinh1.jpg";

import "./style.css";

export default function HomeContent() {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const row_home_1 = {
    marginLeft: "180px",
  };
  const body_title_styles_1 = {
    marginTop: "20px",
    fontSize: "30px",
    marginLeft: "180px",
  };
  const blog_1 = {};
  const linksGroupTitle = {};
  const linksGroupProduct = {};
  return (
    <>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle} className="contentStyle">
            <img src={hinh}></img>
          </h3>
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

      <Row style={row_home_1}>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 350,
            }}
            cover={<img src={hinh} />}
          ></Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 350,
            }}
            cover={<img src={hinh} />}
          ></Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{
              width: 350,
            }}
            cover={<img src={hinh} />}
          ></Card>
        </Col>
      </Row>

      <Row style={body_title_styles_1}>
        <Col span={6} className="links-title">
          <p style={blog_1}>From The Blog</p>
        </Col>

        <Col span={12} style={linksGroupTitle} className="links-group-title">
          <a href="https://#">Feartured</a>
          <a href="https://#">On Sale</a>
          <a href="https://#">Top Rate</a>
        </Col>
      </Row>
      <Row style={body_title_styles_1}>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: 350,
            }}
            cover={<img src={hinh} />}
          ></Card>
        </Col>

        <Col span={12} style={linksGroupProduct} class="links-group-product">
          <Col span={4}>
            <Card
              hoverable
              style={{
                width: 350,
              }}
              cover={<img src={hinh} />}
            ></Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{
                width: 350,
              }}
              cover={<img src={hinh} />}
            ></Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{
                width: 350,
              }}
              cover={<img src={hinh} />}
            ></Card>
          </Col>
        </Col>
      </Row>
    </>
    // =======
    // import Home2Content from "./Home2Content";
    // import "./HomeContent.scss";
    // export default function HomeContent() {
    //   return (
    //     <div className="txt-sass">
    //       test css
    //       <Home2Content />
    //     </div>
    // >>>>>>> 871f7188ba9ebf96b6cb6d1335c522dabe322d4b
  );
}
