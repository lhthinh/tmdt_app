import {
  UilSearch,
  UilUser,
  UilShoppingCartAlt,
  UilAngleDown,
  UilAngleRightB,
  UilAngleUp,
} from "@iconscout/react-unicons";
import { Col, Input, Row, Badge } from "antd";
import { BackTop } from "antd";
import { find } from "lodash";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { show } from "../../components/Login/LoginSlice";
import "./header.scss";
import { ClockCircleOutlined } from "@ant-design/icons";

const { Search } = Input;
const suffix = (
  <UilSearch
    style={{
      fontSize: 100,
    }}
  />
);
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 50,
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
  marginTop: 5,
};
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = () => {
    dispatch(show());
  };

  return (
    <div id="header">
      <div className="header">
        <div className="container">
          <Row style={{ display: "flex" }}>
            <Col span={3}></Col>
            <Col span={3}>
              <a
                onClick={() => {
                  navigate("/#");
                }}
                style={{ display: "flex" }}
              >
                <h1 style={{ color: "red" }}>A</h1>
                <h1 style={{ color: "white" }}>sics</h1>
              </a>
            </Col>
            <Col span={8}>
              <div className="As-searchbox">
                {/* <div className="title-warp">
                  <h3 className="title">Tìm kiếm</h3>
                </div> */}
                <div className="As-Search">
                  <div className="ASsearch_head_wrap">
                    <form action="/" className="search-form">
                      <input
                        id="As-keyword-input"
                        name="keyword"
                        type="text"
                        placeholder="Bạn cần tìm sản phẩm nào..?"
                        Autofocus
                      ></input>
                      <button
                        type="submit"
                        className="btn-submit-search"
                        style={{ cursor: "pointer" }}
                      >
                        <UilSearch aria-hidden="true"></UilSearch>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6} className="check_order-accountCus">
              <div className="Asico-head-warp">
                <div className="Ascheck-order-warp">
                  <button
                    className="check-order"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    Kiểm tra đơn hàng
                  </button>
                  <ul className="ico-header">
                    <li onClick={handleOpen} className="ic-user">
                      <UilUser style={{ width: 30, height: 30 }} />
                    </li>

                    <li
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      <Badge count={0} showZero>
                        <UilShoppingCartAlt
                          style={{ width: 30, height: 30, color: "white" }}
                        />
                      </Badge>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div id="wrapper">
        <div id="nav-header">
          <nav className="container_nav-header">
            <ul id="main-menu">
              <li>
                <a className="name-provider">
                  Laptop
                  <UilAngleDown style={{ width: 15, height: 15 }} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>
                      <div>Acer</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Aspire 7</a>
                      </li>
                      <li>
                        <a>Nitro 5</a>
                      </li>
                      <li>
                        <a>Helios</a>
                      </li>
                      <li>
                        <a>Triton</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Asus</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Asus Văn phòng</a>
                      </li>
                      <li>
                        <a>TUF series</a>
                      </li>
                      <li>
                        <a>ROG series</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Dell</a>
                  </li>
                  <li>
                    <a>
                      <div>MSI</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>MSI Văn phòng</a>
                      </li>
                      <li>
                        <a>Gaming AMD series</a>
                      </li>
                      <li>
                        <a>Gaming Intel series</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  Asics PC <UilAngleDown style={{ width: 15, height: 15 }} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>
                      <div>Asics PC</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>PC Gaming</a>
                      </li>
                      <li>
                        <a>PC văn phòng</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Mini PC</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Mini PC Intel</a>
                      </li>
                      <li>
                        <a>Mini PC Asus</a>
                      </li>
                      <li>
                        <a>Mini PC Gigabyte</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  Màn Hình <UilAngleDown style={{ width: 15, height: 15 }} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>
                      <div>Màn hình theo hãng</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Màn Hình Asus</a>
                      </li>
                      <li>
                        <a>Màn Hình MSI</a>
                      </li>
                      <li>
                        <a>Màn Hình Dell</a>
                      </li>
                      <li>
                        <a>Màn Hình Gigabyte</a>
                      </li>
                      <li>
                        <a>Màn Hình Samsung</a>
                      </li>
                      <li>
                        <a>Màn Hình Acer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Màn Hình gaming</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  Linh Kiện <UilAngleDown style={{ width: 15, height: 15 }} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>
                      <div>CPU</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>
                          <div>CPU AMD</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>CPU Ryzen 5000</a>
                          </li>
                          <li>
                            <a>CPU Ryzen 7000</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>
                          <div>CPU Intel</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>CPU Intel 12th</a>
                          </li>
                          <li>
                            <a>CPU Inetl 13th</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Mainboard</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>
                          <div>Main Asus</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>Mainboard Asus Intel</a>
                          </li>
                          <li>
                            <a>Mainboard Asus AMD</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>
                          <div>Main Gigabyte</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>Mainboard Gigabyte Intel</a>
                          </li>
                          <li>
                            <a>Mainboard Gigabyte AMD</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>
                          <div>Main MSI</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>Mainboard MSI Intel</a>
                          </li>
                          <li>
                            <a>Mainboard MSI AMD</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>RAM</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>
                          <div>RAM PC</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>Ram Kingston</a>
                          </li>
                          <li>
                            <a>Ram Gigabyte</a>
                          </li>
                          <li>
                            <a>Ram TeamGroup</a>
                          </li>
                          <li>
                            <a>Ram Corsair</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>RAM Laptop</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>VGA</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>
                          <div>VGA Asus</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>VGA Asus RTX 4000 Series</a>
                          </li>
                          <li>
                            <a>VGA Asus RTX 2060</a>
                          </li>
                          <li>
                            <a>VGA Asus GTX</a>
                          </li>
                          <li>
                            <a>
                              <div>VGA Asus RTX 3000 Series</div>
                              <div>
                                <UilAngleRightB
                                  style={{
                                    width: 12,
                                    height: 12,
                                  }}
                                />
                              </div>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a>VGA Asus RTX 3060 - 3060Ti</a>
                              </li>
                              <li>
                                <a>VGA Asus RTX 3070 - 3070Ti</a>
                              </li>
                              <li>
                                <a>VGA Asus RTX 3080 - 3080Ti</a>
                              </li>
                              <li>
                                <a>VGA Asus RTX 3090 - 3090Ti</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a>VGA Asus AMD Radeon RX</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>
                          <div>VGA Gigabyte</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>VGA Gigabyte RTX 4000 Series</a>
                          </li>
                          <li>
                            <a>VGA Gigabyte RTX 2060</a>
                          </li>
                          <li>
                            <a>VGA Gigabyte GTX</a>
                          </li>
                          <li>
                            <a>
                              <div>VGA Gigabyte RTX 3000 Series</div>
                              <div>
                                <UilAngleRightB
                                  style={{
                                    width: 12,
                                    height: 12,
                                  }}
                                />
                              </div>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a>VGA Gigabyte RTX 3060 - 3060Ti</a>
                              </li>
                              <li>
                                <a>VGA Gigabyte RTX 3070 - 3070Ti</a>
                              </li>
                              <li>
                                <a>VGA Gigabyte RTX 3080 - 3080Ti</a>
                              </li>
                              <li>
                                <a>VGA Gigabyte RTX 3090 - 3090Ti</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a>VGA Gigabyte AMD Radeon RX</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a>
                          <div>VGA MSI</div>
                          <div>
                            <UilAngleRightB
                              style={{
                                width: 12,
                                height: 12,
                              }}
                            />
                          </div>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a>VGA MSI RTX 4000 Series</a>
                          </li>
                          <li>
                            <a>VGA MSI RTX 2060</a>
                          </li>
                          <li>
                            <a>VGA MSI GTX</a>
                          </li>
                          <li>
                            <a>
                              <div>VGA MSI RTX 3000 Series</div>
                              <div>
                                <UilAngleRightB
                                  style={{
                                    width: 12,
                                    height: 12,
                                  }}
                                />
                              </div>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a>VGA MSI RTX 3060 - 3060Ti</a>
                              </li>
                              <li>
                                <a>VGA MSI RTX 3070 - 3070Ti</a>
                              </li>
                              <li>
                                <a>VGA MSI RTX 3080 - 3080Ti</a>
                              </li>
                              <li>
                                <a>VGA MSI RTX 3090 - 3090Ti</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a>VGA MSI AMD Radeon RX</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>SSD</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>SSD 120GB - 128GB</a>
                      </li>
                      <li>
                        <a>SSD 240GB - 256GB</a>
                      </li>
                      <li>
                        <a>SSD 480GB - 512GB</a>
                      </li>
                      <li>
                        <a>SSD 1TB - 2TB</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>HHD</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>HHD PC</a>
                      </li>
                      <li>
                        <a>HHD Laptop</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Case máy tính</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Case Asus</a>
                      </li>
                      <li>
                        <a>Case Antec</a>
                      </li>
                      <li>
                        <a>Case Gigabyte</a>
                      </li>
                      <li>
                        <a>Case MSI</a>
                      </li>
                      <li>
                        <a>Case Corsair</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Nguồn máy tính</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Nguồn Gigabyte</a>
                      </li>
                      <li>
                        <a>Nguồn MSI</a>
                      </li>
                      <li>
                        <a>Nguồn Corsair</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Tản nhiệt CPU</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Tản Nhiệt Asus</a>
                      </li>
                      <li>
                        <a>Tản Nhiệt Corsair</a>
                      </li>
                      <li>
                        <a>Tản Nhiệt MSI</a>
                      </li>
                      <li>
                        <a>Tản Nhiệt Gigabyte</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Quạt Case</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Quạt Corsair</a>
                      </li>
                      <li>
                        <a>Quạt Deepcool</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  Gaming Gear <UilAngleDown style={{ width: 15, height: 15 }} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>
                      <div>Bàn Phím</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Bàn phím Asus</a>
                      </li>
                      <li>
                        <a>Bàn phím Logitech</a>
                      </li>
                      <li>
                        <a>Bàn phím HyperX</a>
                      </li>
                      <li>
                        <a>Bàn Phím AKKO</a>
                      </li>
                      <li>
                        <a>Bàn Phím Razer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Chuột</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Chuột Asus</a>
                      </li>
                      <li>
                        <a>Chuột HyperX</a>
                      </li>
                      <li>
                        <a>Chuột Logitech</a>
                      </li>
                      <li>
                        <a>Chuột Razer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Lót Chuột</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Lót Chuột Razer</a>
                      </li>
                      <li>
                        <a>Lót Chuột HyperX</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Tai Nghe</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Tai Nghe Asus</a>
                      </li>
                      <li>
                        <a>Tai Nghe HyperX</a>
                      </li>
                      <li>
                        <a>Tai Nghe Logitech</a>
                      </li>
                      <li>
                        <a>Tai Nghe Razer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Microphone</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Microphone HyperX</a>
                      </li>
                      <li>
                        <a>Microphone Razer</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      <div>Loa</div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Webcam</div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Tay Cầm</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a>
                  Apple <UilAngleDown style={{ width: 15, height: 15 }} />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a>
                      <div>iMac</div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>Macbook</div>
                      <div>
                        <UilAngleRightB
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </div>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a>Macbook Air</a>
                      </li>
                      <li>
                        <a>Macbook Pro</a>
                      </li>
                      <li>
                        <a>Cổng chuyển Macbook</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div>
        <Row>
          <Col span={6}>
            <h1 className="title-text">ASICC</h1>
          </Col>
          <Col span={12} offset={1} style={{ marginTop: 35 }}>
            <Search placeholder="Tìm kiếm" enterButton />
          </Col>
        </Row>
      </div>
      <div className="center">
        <Space size={30}>
          <div
            className="action-click"
            onClick={() => {
              navigate("/");
            }}
          >
            Trang chủ
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/listproduct");
            }}
          >
            Sản phẩm
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/about");
            }}
          >
            Về chúng tôi
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/blog");
            }}
          >
            Tin tức
          </div>
          <div
            className="action-click"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Liên hệ
          </div>
        </Space>
      </div> */}
      <BackTop className="back-to-top">
        <div style={style}>
          <UilAngleUp />
        </div>
      </BackTop>
    </div>
  );
}
