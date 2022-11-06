import { Button, Card, Input, message, Row, Col } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useState } from "react";
import { UilPhone } from "@iconscout/react-unicons";
import hinhmau from "../../assets/image/aspire-2.jpg";
import { useNavigate } from "react-router-dom";
import SliderImage from "../sliderImage/SlideImage.js";
import "./ProductContent.scss";
export default function ProductContent() {
  const detail = {
    name: "Laptop Gaming Acer Aspire 7 A715-42G-R4XX GTX 1650 4GB Ryzen 5 5500U 8GB 256GB 15.6 FHD IPS Win 11",
    price: 200,
    description: "Ram 8gb",
    img: hinhmau,
    qualify: 1,
  };
  const [qualify, setQualify] = useState(1);
  // const increment = () => {
  //   setQualify(qualify + 1);
  // };
  const navigate = useNavigate();
  // const decrement = () => {
  //   if (qualify > 1) {
  //     setQualify(qualify - 1);
  //   } else {
  //     message.error("Số lượng sản phẩm không được ít hơn 1");
  //   }
  // };
  const handleCart = () => {
    console.log({
      name: detail.name,
      qualify: qualify,
    });
  };
  return (
    <div class="content-productContent">
      <div className="gr-title">
        <h1 className="title_product">{detail.name}</h1>
        {detail.qualify != 0 ? (
          <div className="stock-status">
            <a>Còn hàng</a>
          </div>
        ) : (
          <div className="stock-status-2">
            <a>Hết hàng</a>
          </div>
        )}
      </div>
      {/* <Card
        style={{ width: 350, height: 400 }}
        cover={<img alt="example" src={detail.img} />}
      >
        <Meta title={detail.name} description={detail.description} />
        <p>
          <UilAdjustHalf />
          {detail.price}
        </p>
      </Card> */}

      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col span={12} className="image_product">
          <img
            alt="image product"
            src={hinhmau}
            width="420"
            height="430"
            style={{ marginLeft: 50 }}
          />
          {/* các hình ảnh khác của sản phẩm */}
          <SliderImage />
          {/* Sản phẩm liên quan */}
          <div className="gr-product-related">
            <h1 className="title-proRela">Sản phẩm liên quan</h1>
            <div className="list-proRela">
              <ul>
                <li className="list-content-proRela">
                  <Card
                    style={{
                      width: 280,
                      height: 340,
                      cursor: "pointer",
                      fontSize: 15,
                    }}
                    className="main-menu"
                    cover={<img alt="product" src={detail.img} />}
                  >
                    <ul>
                      <li className="title_price-product">
                        <a className="title-product">
                          <Meta title={detail.name} />
                        </a>
                        <a className="price-product">
                          <Meta description={detail.price} />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a
                              onClick={() => {
                                navigate("/product");
                              }}
                            >
                              Mua Ngay
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Card>
                </li>
                <li className="list-content-proRela">
                  <Card
                    style={{
                      width: 280,
                      height: 340,
                      cursor: "pointer",
                      fontSize: 15,
                    }}
                    className="main-menu"
                    cover={<img alt="product" src={detail.img} />}
                  >
                    <ul>
                      <li className="title_price-product">
                        <a className="title-product">
                          <Meta title={detail.name} />
                        </a>
                        <a className="price-product">
                          <Meta description={detail.price} />
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a
                              onClick={() => {
                                navigate("/product");
                              }}
                            >
                              Mua Ngay
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
          {/* tăng giảm số lượng sản phẩm */}
          {/* <div
            className="change_sl_product"
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <Button onClick={decrement}>-</Button>
            <Input
              style={{
                width: 50,
                textAlign: "center",
                alignItems: "center",
                marginLeft: 2,
                marginRight: 2,
              }}
              value={qualify}
              onInput={(e) => {
                setQualify(e.target.value);
              }}
            ></Input>
            <Button onClick={increment}>+</Button>
          </div> */}
        </Col>
        <Col span={12}>
          <div className="gr-price">
            <div className="box">
              <div className="main-price">
                <p>Mua ngay</p>
                <span className="price">{detail.price}</span>
              </div>
              <div className="or">
                <p>Hoặc</p>
              </div>
              <div className="prepay-price">
                <p>Trả trước từ</p>
                <span>{detail.price}</span>
              </div>
            </div>
          </div>
          <div className="product_top_box_wrap">
            <div className="default_box promotion_box">
              <div className="box">
                <div className="wrap">
                  <p className="title-1 color-bg-text">Khuyến Mãi</p>
                  <div className="cont">
                    <ul>
                      <li>
                        <span style={{ color: "black", fontSize: "14px;" }}>
                          Nội dung khuyến mãi
                        </span>
                      </li>
                      <li>
                        <span style={{ color: "black", fontSize: "14px;" }}>
                          Nội dung khuyến mãi
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="default_box contact_box">
              <div className="box">
                <div className="wrap">
                  <div className="hotline">
                    <UilPhone style={{ color: "red" }} />
                    <a href="tel:0946005077">
                      Hotline:
                      <br />
                      <b>0946005077</b>
                    </a>
                  </div>
                  <div className="cont">
                    <p style={{ fontSize: "14px" }}>
                      <br />» Miễn phí giao hàng toàn quốc
                      <br />» Giao nhanh 2h chỉ 20k( nội thành HCM - HN)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-btn">
            {/* <div style={{ marginTop: 30 }}>
              <Button type="primary" onClick={() => {}} className="btn_buy_now">
                MUA HÀNG NGAY
              </Button>
            </div> */}
            <div>
              <Button
                type="primary"
                onClick={handleCart}
                className="btn_add_cart"
              >
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>
          </div>
          <div class="des-product">
            <form className="fr-des">
              <h1 className="des-title">Mô tả sản phẩm</h1>
              <h3>{detail.name}</h3>
              <p>Thông số kỹ thuật</p>
              <div className="table" style={{ display: "flex" }}>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">CPU</th>
                      <td>
                        CPU Intel Core i5-12400F 6 Core 12 Thread (Bảo hành 36
                        tháng)
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Mainboard</th>
                      <td>MSI Pro B660M-A DDR4 (Bảo hành 36 tháng)</td>
                    </tr>
                    <tr>
                      <th scope="row">RAM</th>
                      <td>
                        Team Vulcan Z Gray 16GB (2x 8GB) DDR4 Bus 3200 (Bảo hành
                        36 tháng)
                      </td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">VGA</th>
                      <td>
                        Gigabyte GeForce RTX 3060 Gaming OC 12G (Bảo hành 36
                        tháng)
                      </td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">SSD</th>
                      <td>
                        Ổ cứng SSD Kingston NV1 250GB Nvme PCIe M.2 2280 (Bảo
                        hành 36 tháng)
                      </td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">Case</th>
                      <td>MSI MAG Forge M100A- 4 FAN (Bảo hành 12 tháng)</td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">Nguồn</th>
                      <td>
                        MSI MAG AB650N 650W 80 Plus Bronze (Bảo hành 36 tháng)
                      </td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">HDD</th>
                      <td>Tùy chọn thêm</td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">Tản nhiệt CPU: </th>
                      <td>Tùy chọn thêm</td>
                    </tr>{" "}
                    <tr>
                      <th scope="row">Quạt case: </th>
                      <td>Tùy chọn thêm</td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
