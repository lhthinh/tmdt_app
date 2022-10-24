import { Card, Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./HomeContent.scss";
const { Meta } = Card;
export default function HomeContent() {
  const visible = useSelector((state) => state.login.visible);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(show());
  };
  const handleCancel = () => {
    dispatch(unshow());
  };
  console.log(visible);
  return (
    <div className="body">
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
