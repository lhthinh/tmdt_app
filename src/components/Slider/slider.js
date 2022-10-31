import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import "./slider.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hinhmau from "../../assets/image/aspire-2.jpg";
const { Meta } = Card;

export default function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const navigate = useNavigate();
  const tempArr = [
    {
      name: "ram",
      price: "10.900.000",
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

  return (
    <div>
      <Slider {...settings}>
        {tempArr.map((item, index) => {
          return (
            <Col span={4}>
              <Card
                style={{
                  width: 240,
                  height: 300,
                  cursor: "pointer",
                  fontSize: 15,
                }}
                className="main-menu"
                cover={<img alt="product" src={item.img} />}
                onClick={() => {
                  navigate("/product");
                }}
              >
                <ul>
                  <li>
                    <a>
                      <Meta title={item.name} description={item.price} />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Mua Ngay</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Card>
            </Col>
          );
        })}
      </Slider>
    </div>
  );
}
