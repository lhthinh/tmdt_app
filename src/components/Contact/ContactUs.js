import { Card, Col, Radio, Row } from "antd";
import SizeContext from "antd/lib/config-provider/SizeContext";
import React from "react";
import logo from "../../assets/image/logo.png";
import { UilAirplay } from "@iconscout/react-unicons";

export default function ContactUs() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <Card
            style={{
              width: 600,
              height: 750,
              marginLeft: 150,
              borderRadius: 30,
            }}
            cover={<img alt="hinh" src={logo} />}
          >
            <div style={{ marginLeft: 50, fontSize: 20 }}>
              <b>ASICC HCM (Làm việc từ 9h00 - 20h00)</b>
              <br />
              <br />
              Lầu 5, 35 Nguyễn Văn Tráng, P.Bến Nghé, Quận 1,TP.HCM
              <br />
              <br />
              Phone:(028) 7109 1181
              <br />
              <br />
              Email bán hàng:sales@theasicc.com
              <br />
              <br />
              CSKH ASICC:cskh@theasicc.com
            </div>
          </Card>
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
