import {
  UilCarSideview,
  UilMapMarker,
  UilShoppingCartAlt,
  UilUser,
  UilSearch,
} from "@iconscout/react-unicons";
import { Carousel, Col, Input, Row, Space } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { show } from "../../components/Login/LoginSlice";
import "./header.scss";
import bg from "../../assets/image/bg.png";
import laptop from "../../assets/image/laptop.png";
import hinh1 from "../../assets/image/hinh1.jpg";

const { Search } = Input;
const suffix = (
  <UilSearch
    style={{
      fontSize: 100,
    }}
  />
);
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => {
    dispatch(show());
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <div className="header">
        <Space>
          <div
            className="dam action-click"
            onClick={() => {
              navigate("/");
            }}
          >
            <UilMapMarker />
            <p className="txt-header">Store Locator</p>
          </div>
          <div className="dam action-click">
            <UilCarSideview />
            <p className="txt-header">Track Your Oder</p>
          </div>
          <div className="dam action-click">
            <UilShoppingCartAlt />
            <p className="txt-header">Shop</p>
          </div>
          <div className="dam action-click" onClick={handleOpen}>
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
          <Col span={12} offset={1} style={{ marginTop: 35 }}>
            <Search placeholder="Tìm kiếm" enterButton />
          </Col>
        </Row>
      </div>
      <div className="center">
        <Space style={{ gap: 100 }}>
          <div
            className="action-click"
            onClick={() => {
              navigate("/");
            }}
          >
            Trang chủ
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/listproduct");
            }}
          >
            Sản phẩm
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/about");
            }}
          >
            Về chúng tôi
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Tin tức
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Liên hệ
          </div>
        </Space>
      </div>
      <div>
        <Carousel afterChange={onChange} autoplay>
          <div>
            <h1 className="size">
              <img alt="hinhhhh" src={bg}></img>
            </h1>
          </div>
          <div>
            <h1 className="size">
              <img alt="hinhhhh" src={bg}></img>
            </h1>
          </div>
          <div>
            <h1 className="size">
              <img alt="hinhhhh" src={bg}></img>
            </h1>
          </div>
          <div>
            <h1 className="size">
              <img alt="hinhhhh" src={bg}></img>
            </h1>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
