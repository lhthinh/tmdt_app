import React from "react";
import { Card, Col, Row } from "antd";
import "./slider.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hinhmau from "../../assets/image/aspire-2.jpg";
const { Meta } = Card;

export default function MultipleItems(props) {
  const { data: dataTest } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const navigate = useNavigate();

  return (
    <div>
      <Slider {...settings}>
        {dataTest?.map((item, index) => {
          return (
            <Col span={24}>
              <Card
                style={{
                  width: 300,
                  height: 350,
                  cursor: "pointer",
                }}
                className="main-menu"
                cover={<img alt="product" src={item.img} />}
              >
                <ul>
                  <li className="title_price-product">
                    <a className="title-product">
                      <Meta title={item.name} />
                    </a>
                    <a className="price-product">
                      <Meta description={item.price} />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a
                          onClick={() => {
                            navigate("/product");
                          }}
                        >
                          Mua Ngay
                        </a>
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
