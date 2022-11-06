import { Col, Row } from "antd";
import React from "react";
import "./footer.scss";
import { useLocation, useNavigate } from "react-router-dom";
import {
  UilLocationPinAlt,
  UilFacebookF,
  UilInstagram,
  UilYoutube,
} from "@iconscout/react-unicons";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div class="container-footer">
            <Row className="row-footer">
              <Col span={6} className="info-footer">
                <div className="item">
                  <h3 className="footer-title">Thông tin liên hệ</h3>
                  <div className="footer-content">
                    <ul clasName="ft-ct">
                      <li className="phoneNumber">
                        <h3 className="title">Hotline:</h3>
                        <ul>
                          <li>
                            <a href="sđt:0909686884">
                              <b>090 968 6884</b>
                            </a>
                          </li>
                          <li>
                            <a href="sđt:0946005077">
                              <b>094 600 5077</b>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        className="mail_gr"
                        style={{ marginTop: 10, marginBottom: 20 }}
                      >
                        <h3 className="title">Email:</h3>
                        <ul>
                          <li>
                            <a href="mailto:sales@asics.com" className="mailto">
                              <b>sales@asics.com</b>
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:support@asics.com"
                              className="mailto"
                            >
                              <b>support@asics.com</b>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="timeWork_gr">
                        <h3 className="title">Giờ làm việc:</h3>
                        <ul>
                          <li>
                            <p>
                              <b>Thứ 2 - Thứ 7 09h:00 - 19h:00</b>
                            </p>
                          </li>
                          <li>
                            <p>
                              <b>Chủ nhật 09h:00 - 18h:00</b>
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col span={6} className="store-footer">
                <div className="item">
                  <h3 className="footer-title">Hệ thống cửa hàng</h3>
                  <div className="footer-content">
                    <ul clasName="ft-ct">
                      <h3 className="title">TPHCM:</h3>
                      <ul>
                        <li>
                          <UilLocationPinAlt
                            style={{
                              color: "red",
                              width: 40,
                              height: 40,
                              paddingTop: 10,
                            }}
                          />
                          <p>
                            1583, 3 tháng 2, phường 16, quận 11, Hồ Chí Minh
                          </p>
                        </li>
                        <li>
                          <UilLocationPinAlt
                            style={{
                              color: "red",
                              width: 40,
                              height: 40,
                              paddingTop: 10,
                              margin: -2,
                            }}
                          />
                          <p>828, Sư Vạn Hạnh, quận 10, Hồ Chí Minh</p>
                        </li>
                        <li>
                          <UilLocationPinAlt
                            style={{
                              color: "red",
                              width: 40,
                              height: 40,
                              paddingTop: 10,
                            }}
                          />
                          <p>
                            102 Trần Văn Kiểu, phường 2, quận 6, Hồ Chí Minh
                          </p>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col span={4} className="quickLink-footer">
                <div className="item">
                  <h3 className="footer-title">Liên kết nhanh</h3>
                  <div className="footer-content">
                    <ul clasName="ft-ct">
                      <li>
                        <a
                          className="qLink"
                          title="Về Asics"
                          onClick={() => {
                            navigate("/about");
                          }}
                          // chọn trang thì title trang đó đổi màu
                          style={
                            location.pathname.includes("about")
                              ? {
                                  color: "red",
                                }
                              : {}
                          }
                        >
                          Về Asics
                        </a>
                      </li>
                      <li>
                        <a
                          className="qLink"
                          title="Sản phẩm"
                          onClick={() => {
                            navigate("/all/product");
                          }}
                          // chọn trang thì title trang đó đổi màu
                          style={
                            location.pathname.includes("all/product")
                              ? {
                                  color: "red",
                                }
                              : {}
                          }
                        >
                          Sản phẩm
                        </a>
                      </li>
                      <li>
                        <a
                          className="qLink"
                          title="Liên hệ"
                          onClick={() => {
                            navigate("/contact");
                          }}
                          // chọn trang thì title trang đó đổi màu
                          style={
                            location.pathname.includes("contact")
                              ? {
                                  color: "red",
                                }
                              : {}
                          }
                        >
                          Liên hệ
                        </a>
                      </li>
                      <li>
                        <a
                          className="qLink"
                          title="Tin Tức"
                          onClick={() => {
                            navigate("/blog");
                          }}
                          // chọn trang thì title trang đó đổi màu
                          style={
                            location.pathname.includes("blog")
                              ? {
                                  color: "red",
                                }
                              : {}
                          }
                        >
                          Tin Tức
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="My_website">
                    <a
                      onClick={() => {
                        navigate("/#");
                      }}
                      style={{ display: "flex" }}
                    >
                      <h1 style={{ color: "red" }}>A</h1>
                      <h1 style={{ color: "white" }}>sics</h1>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content-footer-bottom">
                  <div className="copyright-footer">
                    <p>
                      Copyright © 2022 Asics | Nguyễn Gia Hào | Hà Quốc Thanh
                      Nguyên | Tăng Kim Phi Long
                    </p>
                  </div>
                  <div className="social-ic">
                    <ul>
                      <li>
                        <a target="_blank" href="#">
                          <UilFacebookF />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <UilInstagram />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <UilYoutube />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-title">
        <Row>
          <Col span={12} className="title-footer">
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
      </div> */}
    </div>
  );
}
