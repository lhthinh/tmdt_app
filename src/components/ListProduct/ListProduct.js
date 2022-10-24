import { Card, Col, Row } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllproduct } from "./ListProductSlice";
import "./ListProduct.scss";

const { Meta } = Card;

export default function ListProduct() {
  const data = useSelector((state) => state.listProduct.allproduct);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://635688c2a2d1844a97773ef9.mockapi.io/product/product")

      .then((result) => {
        console.log(result);
        dispatch(getAllproduct(result?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="center">
      <Row>
        {data.map((item, index) => {
          return (
            <Col span={6}>
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
  );
}
