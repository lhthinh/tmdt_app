import React from "react";
import { Card, Col, Row } from "antd";
import "./slide.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hinhmau from "../../assets/image/aspire-2.jpg";
const { Meta } = Card;

export default function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  const navigate = useNavigate();
  const tempArr = [
    {
      name: "Laptop Gaming Acer Aspire 7 A715-42G-R4XX GTX 1650 4GB Ryzen 5 5500U 8GB 256GB 15.6 FHD IPS Win 11",
      price: "14,790,00đ",
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
    <div className="center">
      <Slider {...settings}>
        {tempArr.map((item, index) => {
          return (
            <Col span={4}>
              <div className="slideShowImage">
                <img alt="hinh" src={item.img} width="65" height="67" />
              </div>
              {/* <Card
                style={{
                  width: 100,
                  height: 100,
                  cursor: "pointer",
                }}
                className="main-menu"
                cover={<img alt="product" src={item.img} />}
                onClick={() => {
                  navigate("/product");
                }}
              ></Card> */}
            </Col>
          );
        })}
      </Slider>
    </div>
  );
}
