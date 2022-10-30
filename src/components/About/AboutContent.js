import { Col, Row } from "antd";
import React from "react";
import laptop from "../../assets/image/laptop.png";
import bc from "../../assets/image/bg.png";
import "./about.scss";

export default function AboutContent() {
  const style = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
  };

  var tmpArr = [
    { name: "Ram", price: 200, cate: "Linh kien" },
    { name: "Ram", price: 200, cate: "Linh kien" },
    { name: "Ram", price: 200, cate: "Linh kien" },
    { name: "Ram", price: 200, cate: "Linh kien" },
    { name: "Ram", price: 200, cate: "Linh kien" },
    { name: "Ram", price: 200, cate: "Linh kien" },
  ];
  return (
    <>
      <div style={{ margin: 300, marginBottom: 100 }} className="about-page">
        <Row>
          <Col span={12}>
            <div style={{ marginRight: 60 }}>
              <div className="title-overview">
                <h2 className="main-title" style={{ marginBottom: 50 }}>
                  GIỚI THIỆU ASICS
                </h2>
              </div>
              <div className="des">
                <p>
                  Thương hiệu Asics bao gồm website <a>theasics.com</a> và
                  <a> Fanpage AsicsVietnam.</a> <br /> <br />
                  Thương hiệu Asics thuộc sở hữu của Công ty TNHH The Asics.
                  Được biết đến là đơn vị ủy quyền bán lẻ chính thức tại Việt
                  Nam, chuyên kinh doanh các sản phẩm Laptop Gaming cao cấp, PC
                  đồ họa, linh-phụ kiện, thiết bị giải trí của nhiều nhãn hàng
                  lớn như Acer, Asus, Apple, Dell, HP, Lenovo, MSI, Gigabyte,
                  Razer, HyperX, Logitech, Samsung… <br /> <br /> Sau nhiều năm
                  phát triển với phương châm Khách hàng ở vị trí trọng tâm,
                  Asics luôn cố gắng nỗ lực hết mình để đem đến sản phẩm và dịch
                  vụ tốt nhất đến với khách hàng. <br /> <br />
                  Chúng tôi luôn cam kết đảm bảo các sản phẩm bán ra là chính
                  hãng và có nguồn gốc xuất xứ rõ ràng.
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <img alt="hinh1" src={laptop} style={style}></img>
          </Col>
        </Row>
        <br />
        <br />
        <h1 className="main-title" id="main-title_2">
          Sản phẩm cung cấp
        </h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {tmpArr.map(function (item, index) {
            return (
              <Col span={8} key={index} style={{ marginTop: "40px" }}>
                <img alt={"hinh"} src={laptop} style={style} />
              </Col>
            );
          })}
        </Row>
        <br />
        <br />
        <Row>
          <Col span={12}>
            <img alt="hinh1" src={laptop} style={style}></img>
          </Col>
          <Col span={12}>
            <div style={{ marginLeft: 60 }}>
              <h2 className="main-title">CHÍNH SÁCH KHÁCH HÀNG</h2>
              <p>
                <b>
                  Với phương châm : <br /> <br /> “Chất lượng là sự bảo đảm tốt
                  nhất lòng trung thành của khách hàng.” <br /> <br /> Eurotech
                  đã luôn nỗ lực không ngừng để mang đến các sản phẩm, dịch vụ
                  tốt nhất, giá cả hợp lý nhất phục vụ cho nhu cầu đa dạng của
                  khách hàng. <br /> <br />
                  1. Chính sách chất lượng: Chỉ cung cấp các sản phẩm và dịch vụ
                  chất lượng cao từ các nhà sản xuất quốc tế uy tín hàng đầu.{" "}
                  <br /> <br />
                  2. Chính sách giá cả: Cung cấp sản phẩm trực tiếp từ nhà sản
                  xuất, không thông qua bất kỳ kênh trung gian nào khác, Xgear
                  luôn mang đến cho khách hàng mức giá tốt nhất khi mua hàng tại
                  đây. Chúng tôi cam kết chia sẻ quyền lợi với khách hàng.{" "}
                  <br /> <br />
                  3. Chính sách chăm sóc: Chúng tôi luôn nỗ lực mang đến sự hài
                  lòng cho mỗi khách hàng qua phong cách phục vụ tận tình, thấu
                  hiểu và tinh tế. Với đội ngũ nhân viên tư vấn bán hàng chuyên
                  nghiệp, các chuyên gia kĩ thuật trong ngành, Xgear đảm bảo
                  cung cấp cho khách hàng những thông tin trung thực cùng những
                  giải pháp tốt nhất, đạt hiệu quả kinh tế cao nhất.
                </b>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
