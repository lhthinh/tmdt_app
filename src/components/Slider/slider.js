import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import "./slider.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const { Meta } = Card;

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
    };
    const navigate = useNavigate();
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
      <div>
        <Slider {...settings}>
          {tempArr.map((item, index) => {
            return (
              <Col span={4}>
                <Card
                  className="card-product"
                  style={{ width: 260, height: 300, cursor: "pointer" }}
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
        </Slider>
      </div>
    );
  }
}
