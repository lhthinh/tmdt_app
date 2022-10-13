import { Col, Row } from "antd";
import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <Row>
          <Col span={12} className="title">
            Sign up to Newsletter
          </Col>
          <Col span={12} className="input-footer">
            <input className="boder-footer" type="text"></input>
            <button className="button-signup-footer">SignUp</button>
          </Col>
        </Row>
      </div>
      <div className="footer-content">
        <Row>
          <Col span={12} className="footer-info">
            <ul>
              <li className="name-info">ASICC</li>
              <li>
                <h1>+84098763321</h1>
              </li>
              <li>
                <b>Contact info</b>
              </li>
              <li>
                Lầu 5, 35 Nguyễn Văn Tráng, Phường Bến Nghé, Quận 1, Tp.HCM
              </li>
              <li>icon</li>
            </ul>
          </Col>
          <Col span={12} className="footer-intro"></Col>
        </Row>
      </div>
    </div>
  );
}
