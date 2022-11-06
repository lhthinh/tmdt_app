import { Button, Card, Col, Form, Input, Radio, Row } from "antd";
import SizeContext from "antd/lib/config-provider/SizeContext";
import React from "react";
import logo from "../../assets/image/logo1.png";
import { UilAirplay } from "@iconscout/react-unicons";
import TextArea from "antd/lib/input/TextArea";
import "./contact.scss";

export default function ContactUs() {
  const handleSubmit = (values) => {
    console.log(`values`);
  };
  return (
    <div style={{ paddingTop: 100, margin: 100 }}>
      <Row>
        <Col span={12}>
          <Card
            style={{
              width: 600,
              height: 950,
              marginLeft: 150,
              borderRadius: 30,
            }}
            cover={<img alt="hinh" src={logo} style={{ borderRadius: 30 }} />}
          >
            <div style={{ marginLeft: 50, fontSize: 20 }}>
              <b>Asics HCM (Làm việc từ 9h00 - 20h00)</b>
              <br />
              <br />
              <p>1583, 3 tháng 2, phường 16, quận 11, Hồ Chí Minh</p>
              <p>828, Sư Vạn Hạnh, quận 10, Hồ Chí Minh</p>
              <p> 102 Trần Văn Kiểu, phường 2, quận 6, Hồ Chí Minh</p>
              <br />
              <p>Phone: 090 968 6884</p>
              <p>Phone: 094 600 5077</p>
              <br />
              <a className="contact_email" href="mailto:sales@asics.com">
                Email bán hàng:sales@asics.com
              </a>
              <br />
              <a className="contact_email" href="mailto:support@asics.com">
                CSKH Asics:support@asics.com
              </a>
            </div>
          </Card>
        </Col>

        <Col span={12}>
          <Form onFinish={handleSubmit}>
            <h2>
              <b style={{ fontSize: 40, color: "red" }}>Liên hệ</b>
            </h2>
            <p>
              Chúng tôi muốn lắng nghe ý kiến từ quý khách hàng Vui lòng liên hệ
              với chúng tôi, chúng tôi đảm bảo sẽ liên hệ lại với bạn trong thời
              gian sớm nhất có thể.
            </p>

            <div>
              <Row>
                <Col span={6}>
                  <p>Họ và tên *</p>
                  <Form.Item
                    style={{ marginRight: 20 }}
                    name="fullname"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập họ và tên",
                      },
                      {
                        max: 20,
                        message: `Vui lòng nhập không quá 20 ký tự`,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <p>Số điện thoại</p>
                  <Form.Item
                    style={{ marginRight: 20 }}
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại của bạn",
                      },
                      {
                        //number
                      },
                      {
                        max: 10,
                        message: `Vui lòng nhập không quá 10 ký tự`,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <p>Email</p>
                  <Form.Item
                    style={{ Left: 20 }}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập email cùa bạn",
                      },
                      {
                        max: 50,
                        message: `Vui lòng nhập không quá 50 ký tự`,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <p>Tiêu đề</p>
                  <Form.Item
                    style={{ Left: 20 }}
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tiêu đề",
                      },
                      {
                        max: 50,
                        message: `Vui lòng nhập không quá 50 ký tự`,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <p>Lời nhắn *</p>
              <Form.Item
                style={{ paddingRight: "30px" }}
                name="loinhac"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lời nhắn của bạn",
                  },
                  {
                    max: 50,
                    message: `Vui lòng nhập không quá 50 ký tự`,
                  },
                ]}
              >
                <TextArea
                  autoSize={{
                    minRows: 4,
                    maxRows: 6,
                  }}
                />
              </Form.Item>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="btn-submit_contact"
            >
              Gửi ngay
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
