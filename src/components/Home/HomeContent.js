<<<<<<< HEAD
import { UilSearch } from "@iconscout/react-unicons";
import { Card, Col, Input, Radio, Row } from "antd";
import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
=======
import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
>>>>>>> c4810f6d71310fa2519bc1a811e2b41ea53f1754
import "./HomeContent.scss";
import { getAllhomecontent } from "./HomeContentSlice";

const { Meta } = Card;

export default function HomeContent() {
<<<<<<< HEAD
  const data = useSelector((state) => state.listHomecontent.allhomecontent);
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState(data);
  useEffect(() => {
    axios
      .get("https://635688c2a2d1844a97773ef9.mockapi.io/product/product")

      .then((result) => {
        console.log(result);
        dispatch(getAllhomecontent(result?.data));
        setDataProduct(result?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  console.log(dataProduct);
  return (
    <Row>
      <div>
        <Col>
          <div>
            <Input
              prefix={<UilSearch />}
              placeholder="Tìm kiếm"
              className="search-input"
              onChange={(e) => {
                setDataProduct(
                  data.filter((item) => {
                    return item.name.includes(e.target.value);
                  })
                );
              }}
            />
          </div>
          <div>
            <Row>
              <Col span={8}>
                <p>
                  <span>Sắp xếp theo</span>
                </p>
              </Col>
              <Col span={8}>
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  style={{ width: 1000 }}
                >
                  <Radio value={1}>Nổi bậc nhất</Radio>
                  <Radio
                    value={2}
                    onClick={() => {
                      setDataProduct(
                        _.sortBy(dataProduct, [
                          function (o) {
                            return o.price;
                          },
                        ])
                      );
=======
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
                    style={{ width: 300, height: 400, cursor: "pointer" }}
                    cover={<img alt="example" src={item.img} />}
                    onClick={() => {
                      navigate("/product");
>>>>>>> c4810f6d71310fa2519bc1a811e2b41ea53f1754
                    }}
                  >
                    Giá thấp - cao
                  </Radio>
                  <Radio
                    value={3}
                    onClick={() => {
                      setDataProduct(
                        _.sortBy(dataProduct, [
                          function (o) {
                            return o.price;
                          },
                        ]).reverse()
                      );
                    }}
                  >
                    Gia cao - thấp
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
      <div>
        <Row>
          {dataProduct.map((item, index) => {
            return (
              <Col span={8}>
                <Card
                  className="card-blog"
                  style={{ width: 300, height: 400 }}
                  cover={<img alt="example" src={item.avatar} />}
                >
                  <Meta title={item.name} description={item.price} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </Row>
  );
}
