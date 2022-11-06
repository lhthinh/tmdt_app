import React, { useState } from "react";
import { UilAngleDown, UilShoppingCartAlt } from "@iconscout/react-unicons";

import hinhmau from "../../assets/image/aspire-2.jpg";
import "./ProductGetContent.scss";

export default function ProductGetContent() {
  const product_card = [
    {
      id: 1,
      name: "Laptop Gaming Acer",
      price: "14.900.000",
      currency: "đ",
      CPU: "R7 4800U",
      VGA: "RTX 3060",
      RAM: "16GB",
      SSD: "512GB",
      Weight: "1.3kg",
      Screen: "14''FHD,IPS",
      img: hinhmau,
    },
    {
      id: 2,
      name: "Laptop Gaming Asus",
      price: "15.300.000",
      currency: "đ",
      CPU: "R7 5800U",
      VGA: "RTX 3060",
      RAM: "16GB",
      SSD: "512GB",
      Weight: "1.3kg",
      Screen: "14''FHD,IPS",
      img: hinhmau,
    },
    {
      id: 3,
      name: "Laptop Gaming Dell",
      price: "13.900.000",
      currency: "đ",
      CPU: "R7 4800U",
      VGA: "RTX 3060",
      RAM: "16GB",
      SSD: "512GB",
      Weight: "1.3kg",
      Screen: "14''FHD,IPS",
      img: hinhmau,
    },
    {
      id: 4,
      name: "Laptop Gaming MSI",
      price: "16.900.000",
      currency: "đ",
      CPU: "R7 4800U",
      VGA: "RTX 3060",
      RAM: "16GB",
      SSD: "512GB",
      Weight: "1.3kg",
      Screen: "14''FHD,IPS",
      img: hinhmau,
    },
    {
      id: 5,
      name: "Laptop Gaming Legion",
      price: "15.900.000",
      currency: "đ",
      CPU: "R7 4800U",
      VGA: "RTX 3060",
      RAM: "16GB",
      SSD: "512GB",
      Weight: "1.3kg",
      Screen: "14''FHD,IPS",
      img: hinhmau,
    },
  ];
  console.log(product_card);
  const listItems = product_card.map((item) => (
    <div className="card-productGet" key={item.id}>
      <div className="card_img">
        <img src={item.img} />
      </div>
      <div className="card-name-product">
        <h2>{item.name}</h2>
      </div>
      <div className="info-price">
        <p className="price">
          {item.price} <span>{item.currency}</span>
        </p>
        <button className="btn-add-cart">
          <UilShoppingCartAlt />
        </button>
      </div>
      <div className="des-card-product">
        <ul>
          <li>
            <p>
              <span>
                <img
                  width="22"
                  height="22"
                  src="https://xgear.net/wp-content/uploads/2022/03/image-70.png"
                  alt={item.CPU}
                />
              </span>
              {item.CPU}
            </p>
          </li>
          <li>
            <p>
              <span>
                <img
                  width="22"
                  height="22"
                  src="https://xgear.net/wp-content/uploads/2022/03/image-71.png"
                  alt={item.VGA}
                />
              </span>
              {item.VGA}
            </p>
          </li>
          <li>
            <p>
              <span>
                <img
                  width="22"
                  height="22"
                  src="https://xgear.net/wp-content/uploads/2022/03/image-72.png"
                  alt={item.RAM}
                />
              </span>
              {item.RAM}
            </p>
          </li>
          <li>
            <p>
              <span>
                <img
                  width="22"
                  height="22"
                  src="https://xgear.net/wp-content/uploads/2022/03/image-73.png"
                  alt={item.SSD}
                />
              </span>
              {item.SSD}
            </p>
          </li>
          <li>
            <p>
              <span>
                <img
                  width="22"
                  height="22"
                  src="https://xgear.net/wp-content/uploads/2022/03/weight-1.png"
                  alt={item.Weight}
                />
              </span>
              {item.Weight}
            </p>
          </li>
          <li>
            <p>
              <span>
                <img
                  width="22"
                  height="22"
                  src="https://xgear.net/wp-content/uploads/2022/03/image-74.png"
                  alt={item.Screen}
                />
              </span>
              {item.Screen}
            </p>
          </li>
        </ul>
      </div>
    </div>
  ));

  const [visibleProduct, setVisibleProduct] = useState({
    visible: true,
    content: "Sản phẩm mới",
  });

  const handleOpenProduct = () => {
    setVisibleProduct({
      ...visibleProduct,
      visible: !visibleProduct.visible,
    });
  };
  const handleChangeContent = (content) => {
    setVisibleProduct({
      ...visibleProduct,
      content,
      visible: true,
    });
  };
  const [visibleSort, setVisibleSort] = useState({
    visible: true,
    content: "Sản phẩm mới",
  });
  const handleOpenSort = () => {
    setVisibleSort({
      ...visibleSort,
      visible: !visibleSort.visible,
    });
  };
  const handleChangeSort = (content) => {
    console.log(content);
    setVisibleSort({
      ...visibleSort,
      content,
      visible: true,
    });
  };
  return (
    <div className="body">
      <div className="container">
        <div className="gr-title-getProduct">
          <h1 className="main-title-getProduct">Laptop</h1>
          <div className="AScustom_sl">
            <div className="select">
              <select
                data-action="CRload_products"
                name="data-sort"
                class="CRchange_sort_product select-hidden"
              >
                <option selected="" value="new">
                  Sản phẩm mới
                </option>
                <option value="best">Sản phẩm bán chạy</option>
              </select>
              <div className="select-styled" onClick={handleOpenProduct}>
                {visibleProduct.content}
                {/* <UilAngleDown style={{ width: 15, height: 15 }} /> */}
              </div>
              <ul className="select-options" hidden={visibleProduct.visible}>
                <li
                  rel="new"
                  className="active"
                  onClick={() => {
                    handleChangeContent("Sản phẩm mới");
                  }}
                >
                  Sản phẩm mới
                </li>
                <li
                  rel="best"
                  className=""
                  onClick={() => {
                    handleChangeContent("Sản phẩm bán chạy");
                  }}
                >
                  Sản phẩm bán chạy
                </li>
              </ul>
            </div>
            <div className="select">
              <select
                data-action="CRload_products"
                name="data-sort"
                class="CRchange_sort_product select-hidden"
              >
                <option selected="" value="new">
                  Sắp xếp: Mặc định
                </option>
                <option value="best">Sắp xếp: Giá thấp đến cao</option>
                <option value="best">Sắp xếp: Giá cao đến thấp</option>
              </select>
              <div className="select-styled" onClick={handleOpenSort}>
                {visibleSort.content}
                {/* <UilAngleDown style={{ width: 15, height: 15 }} /> */}
              </div>
              <ul className="select-options" hidden={visibleSort.visible}>
                <li
                  rel="new"
                  className="active"
                  onClick={() => {
                    handleChangeSort("Sắp xếp: Mặc định");
                  }}
                >
                  Sắp xếp: Mặc định
                </li>
                <li
                  rel="best"
                  className=""
                  onClick={() => {
                    handleChangeSort("Sắp xếp: Giá thấp đến cao");
                  }}
                >
                  Sắp xếp: Giá thấp đến cao
                </li>
                <li
                  rel="best"
                  className=""
                  onClick={() => {
                    handleChangeSort("Sắp xếp: Giá cao đến thấp");
                  }}
                >
                  Sắp xếp: Giá cao đến thấp
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="ASlist_products" className="loading-products">
          {/* <div className="container-productGet"> */}
          <div>
            <div className="list-product">{listItems}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
