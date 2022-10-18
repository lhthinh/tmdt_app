import { Card, Col, Row } from "antd";
import React from "react";
import "./HomeContent.scss";
const { Meta } = Card;
export default function HomeContent() {
  const tempArr = [
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
    {
      name: "ram",
      price: 200,
      img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    },
  ];
  return (
    <div className="body">
      {/* 3 hình đầu  */}
      <Row className="intro-produc">
        <Col span={8}>
          <Card
            style={{ width: 400 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          {" "}
          <Card
            style={{ width: 400 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={8}>
          {" "}
          <Card
            style={{ width: 400 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        {/* From the BLog */}
      </Row>
      <Row className="content">
        <Col span={8} className="blog">
          <span className="blog-name">From The Blog</span>
          <Card
            className="card-blog-1"
            style={{ width: 350, height: 400 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
          <span className="blog-name-1">Feartured Product</span>
          <Card
            className="card-blog-1"
            style={{ width: 350, height: 740 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Card title" description="This is the description" />
          </Card>
        </Col>
        <Col span={16} className="title">
          <div className="title-name">
            <a href="#">Feartured</a>
            <a href="#">On Sale</a>
            <a href="#">Top Rate</a>
          </div>
          <Row>
            {tempArr.map((item, index) => {
              return (
                <Col span={8}>
                  <Card
                    className="card-blog"
                    style={{ width: 300, height: 400 }}
                    cover={<img alt="example" src={item.img} />}
                  >
                    <Meta
                      title={item.name}
                      description="This is the description"
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
