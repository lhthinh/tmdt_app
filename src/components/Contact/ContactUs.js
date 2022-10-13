import { Col, Row } from "antd";
import React from "react";
import logo from "../../assets/image/logo.png";

export default function ContactUs() {
  return (
    <div>
      <Row>
        <Col className="Ds-logo" span={12}>
          <img alt="hinh" src={logo} />
        </Col>

        <Col span={12}>
          <h2>
            <b>Form liên hệ</b>
          </h2>
          <p>
            Chúng tôi muốn lắng nghe ý kiến từ quý khách hàng Vui lòng liên hệ
            với chúng tôi, chúng tôi đảm bảo sẽ liên hệ lại với bạn trong thời
            gian sớm nhất có thể.
          </p>

          <div>
            <Row>
              <Col span={6}>
                <b>Họ và tên *</b>
                <input type="text" placeholder="  Họ và tên" />
                <br />
                <br />

                <b>Số điện thoại *</b>
                <input type="text" placeholder="  Số điện thoại" />
              </Col>
              <Col span={6}>
                <b>Email *</b>
                <input type="text" placeholder="  Email" />
                <br />
                <br />

                <b>Tiêu đề *</b>
                <input type="text" placeholder="  Tiêu đề" />
              </Col>
            </Row>
            <div>
              <b>Lời nhắn *</b>
              <br />
              <textarea
                type="text"
                placeholder="Nhập nội dung lời nhắn của bạn:"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
