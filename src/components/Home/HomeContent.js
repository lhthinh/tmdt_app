import { Card, Col, Row, Carousel } from "antd";

import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeContent.scss";
import adv4 from "../../assets/image/Halloween.png";
import adv3 from "../../assets/image/Predator-Fest.png";
import adv1 from "../../assets/image/Level-Up-v2.png";
import adv2 from "../../assets/image/Faster-in-class.png";
import acer from "../../assets/image/Acer-Store.jpg";
import asus from "../../assets/image/Asus-Store.jpg";
import lenovo from "../../assets/image/Lenovo-Store.jpg";
import msi from "../../assets/image/MSI-Store.jpg";
import hinhmau from "../../assets/image/aspire-2.jpg";

import SwipeToSlide from "../Slider/slider.js";
const { Meta } = Card;
const onChange = (currentSlide) => {
  console.log(currentSlide);
};
const contentStyle = {
  width: "1320px",
  height: "350px",
  // color: "#fff",
  lineHeight: "350px",
  // textAlign: "center",
  // background: "#364d79",
  dot: false,
};

// const {};
export default function HomeContent() {
  const navigate = useNavigate();

  // const tempArr = [
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  //   {
  //     name: "ram",
  //     price: 200,
  //     img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  //   },
  // ];
  //
  const bestSellerArray = [
    {
      name: "Laptop Gaming Acer Aspire 7 A715-42G-R4XX GTX 1650 4GB Ryzen 5 5500U 8GB 256GB 15.6 FHD IPS Win 11",
      price: "14.790.00đ",
      img: hinhmau,
    },
    {
      name: "ram",
      price: 200,
      img: hinhmau,
    },
    {
      name: "ram",
      price: 200,
      img: hinhmau,
    },
    {
      name: "ram",
      price: 200,
      img: hinhmau,
    },
    {
      name: "ram",
      price: 200,
      img: hinhmau,
    },
    {
      name: "ram",
      price: 200,
      img: hinhmau,
    },
  ];
  const bestGamingSellerArray = [
    {
      name: "Laptop Gaming Acer Aspire 7 A715-42G-R4XX GTX 1650 4GB Ryzen 5 5500U 8GB 256GB 15.6 FHD IPS Win 11",
      price: "14,790,00đ",
      img: hinhmau,
    },
    {
      name: "pc",
      price: 200,
      img: hinhmau,
    },
    {
      name: "pc",
      price: 200,
      img: hinhmau,
    },
    {
      name: "pc",
      price: 200,
      img: hinhmau,
    },
    {
      name: "pc",
      price: 200,
      img: hinhmau,
    },
    {
      name: "pc",
      price: 200,
      img: hinhmau,
    },
  ];
  return (
    <div className="body">
      <div className="container">
        <div className="wrapper">
          <div className="intro-adv">
            <Carousel afterChange={onChange} autoplay>
              <div>
                <h3 style={contentStyle}>
                  <img alt="advertisement" src={adv1} />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="advertisement" src={adv2} />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="advertisement" src={adv3} />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img alt="advertisement" src={adv4} />
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
        {/* Provider */}
        <div
          style={{
            display: "flex",
            marginTop: 20,
          }}
        >
          <Row className="provi-store" style={{ display: "flex" }}>
            <Col span={6}>
              <a
                onClick={() => {
                  navigate("/acer");
                }}
              >
                <img
                  src={acer}
                  alt=""
                  width="655"
                  height="235"
                  style={{ borderRadius: "30px" }}
                />
              </a>
            </Col>
            <Col span={6}>
              <a
                onClick={() => {
                  navigate("/lenovo");
                }}
              >
                <img
                  src={lenovo}
                  alt=""
                  width="655"
                  height="235"
                  style={{ borderRadius: "30px" }}
                />
              </a>
            </Col>
          </Row>
          <Row
            className="provi-store"
            style={{ marginLeft: "10px", display: "flex" }}
          >
            <Col span={6}>
              <a
                onClick={() => {
                  navigate("/asus");
                }}
              >
                <img
                  src={asus}
                  alt=""
                  width="655"
                  height="235"
                  style={{ borderRadius: "30px" }}
                />
              </a>
            </Col>
            <Col span={6}>
              <a
                onClick={() => {
                  navigate("/msi");
                }}
              >
                <img
                  src={msi}
                  alt=""
                  width="655"
                  height="235  "
                  style={{ borderRadius: "30px" }}
                />
              </a>
            </Col>
          </Row>
        </div>
        <div className="wbg-wrapper">
          <Col span={12} style={{ maxWidth: "100%" }}>
            <div className="best-seller-laptop" style={{ display: "flex" }}>
              <span className="holder">
                <span className="sep_line"></span>
              </span>
              <h4>LAPTOP GAMING BEST-SELLER</h4>
              <span className="holder">
                <span className="sep_line"></span>
              </span>
            </div>
            <div>
              <SwipeToSlide data={bestSellerArray} />
            </div>
          </Col>
        </div>
        <div className="wbg-wrapper">
          <Col span={12} style={{ maxWidth: "100%" }}>
            <div className="best-seller-pc" style={{ display: "flex" }}>
              <span className="holder">
                <span className="sep_line"></span>
              </span>
              <h4>PC GAMING BEST-SELLER</h4>
              <span className="holder">
                <span className="sep_line"></span>
              </span>
            </div>
            <div>
              <SwipeToSlide data={bestGamingSellerArray} />
            </div>
          </Col>
        </div>
        <div className="wbg-wrapper">
          <Col span={12} style={{ maxWidth: "100%" }}>
            <div className="best-seller-gamingGear" style={{ display: "flex" }}>
              <span className="holder">
                <span className="sep_line"></span>
              </span>
              <h4>GAMING GEAR</h4>
              <span className="holder">
                <span className="sep_line"></span>
              </span>
            </div>
            <div>
              <SwipeToSlide data={bestGamingSellerArray} />
            </div>
          </Col>
        </div>
      </div>

      {/* <Row className="intro-product">
        <Col span={8}>
          <Card
            style={{ width: 400, cursor: "pointer" }}
            onClick={() => {
              navigate("/product");
            }}
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
                    className="card-product"
                    style={{ width: 300, height: 400, cursor: "pointer" }}
                    cover={<img alt="example" src={item.img} />}
                    onClick={() => {
                      navigate("/product");
                    }}
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
      </Row> */}
    </div>
  );
}
