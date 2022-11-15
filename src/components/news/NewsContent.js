import React from "react";
import { UilAngleRightB } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import "./NewsContent.scss";
import hallorog from "../../assets/image/Hallo-ROG.jpg";
import levelUp from "../../assets/image/level-up-tiep-suc.jpg";
import Top5 from "../../assets/image/TOP-5-LAPTOP-RTX-3050Ti.png";
import NangCapRam from "../../assets/image/Nang-cap-16GB-RAM-vuong.png";
export default function NewsContent() {
  const navigate = useNavigate();
  return (
    <div className="body-news">
      <div className="gr-news-top">
        <div className="wrap-news-top">
          <h1 className="title-news-top">Tin khuyến mãi</h1>
        </div>
        <div className="breadcrumb-news-top">
          <a
            className="title-home"
            onClick={() => {
              navigate("/#");
            }}
          >
            Trang chủ
          </a>
          <UilAngleRightB
            style={{
              fontSize: "14px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
          />
          <a
            onClick={() => {
              navigate("/blog");
            }}
          >
            Tin Tức
          </a>
        </div>
      </div>
      <div className="gr-news-bottom">
        <div className="container">
          <div className="list-news">
            <div className="items-news">
              <div className="wrap-new-bottom">
                <a className="news-1" style={{ textDecoration: "none" }}>
                  <div className="img-news">
                    <img
                      alt="hinh example"
                      src={hallorog}
                      width="352"
                      height="230px"
                    />
                  </div>
                  <div className="cont-news">
                    <div className="date-cont">
                      <b>21</b>
                      <p>10-2022</p>
                    </div>
                    <div className="cont-wrap">
                      <h3 class="content-news">
                        Hallo ROG - nhận ngay voucher 500k, cùng áo thun ASUS
                        cực chất
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="items-news">
              <div className="wrap-new-bottom">
                <div className="img-news">
                  <img
                    alt="hinh example"
                    src={levelUp}
                    width="352"
                    height="230px"
                  />
                </div>
                <div className="cont-news">
                  <div className="date-cont">
                    <b>03</b>
                    <p>10-2022</p>
                  </div>
                  <div className="cont-wrap">
                    <h3 class="content-news">
                      LEVEL UP - TIẾP SỨC CUỘC CHƠI: Nâng cấp RAM, Xcombo, và
                      nhiều ưu đãi khác
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-news">
              <div className="wrap-new-bottom">
                <div className="img-news">
                  <img
                    alt="hinh example"
                    src={NangCapRam}
                    width="352"
                    height="230px"
                  />
                </div>
                <div className="cont-news">
                  <div className="date-cont">
                    <b>31</b>
                    <p>08-2022</p>
                  </div>
                  <div className="cont-wrap">
                    <h3 class="content-news">
                      [PRO PLAYER COME BACK] NÂNG CẤP RAM VỚI CHỈ 490K KHI MUA
                      LAPTOP TẠI XGEAR
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-news">
              <div className="wrap-new-bottom">
                <div className="img-news">
                  <img
                    alt="hinh example"
                    src={Top5}
                    width="352"
                    height="230px"
                  />
                </div>
                <div className="cont-news">
                  <div className="date-cont">
                    <b>23</b>
                    <p>08-2022</p>
                  </div>
                  <div className="cont-wrap">
                    <h3 class="content-news">
                      TOP 5 LAPTOP GAMING SỬ DỤNG CARD ĐỒ HỌA RTX 3050TI GIÁ
                      DƯỚI 25 TRIỆU ĐÁNG MUA NHẤT HIỆN NAY
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
