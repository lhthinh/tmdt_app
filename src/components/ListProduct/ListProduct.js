import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./ListProductSlice";
import { UilAngleDown, UilShoppingCartAlt } from "@iconscout/react-unicons";
import "./ListProduct.scss";
import _ from "lodash";
import productApi from "../../apis/productApi";

export default function ListProduct() {
  const allProduct = useSelector((state) => state.listProduct.allProduct);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    productApi
      .getAllProduct()
      .then((res) => {
        console.log(res);

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .get("https://635fd8033e8f65f283bcf2e7.mockapi.io/product")
    //   // .get("./ListProduct/apifake.json")
    //   .then((res) => {
    //     dispatch(getAllProduct(res.data));
    //     setData(res.data);
    //   });
  }, []);
  // sap xep price
  const sortDecreaseData = () => {
    setData(_.sortBy(allProduct, "price").reverse());
  };
  const sortIncreaseData = () => {
    setData(_.sortBy(allProduct, "price"));
  };
  // const CancelSortData = () => {
  //   setData(_.remove(allProduct, "price"));
  // };

  // thay doi select
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
    <div className="container" style={{ paddingTop: "170px" }}>
      {/* <button
          type="checkbox"
          onClick={() => {
            sortData();
          }}
        >
          giảm dần
        </button> */}
      <div className="gr-title-getProduct">
        <h1 className="main-title-getProduct">Tất cả sản phẩm</h1>
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
              <UilAngleDown style={{ width: 15, height: 15 }} />
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
              <UilAngleDown style={{ width: 15, height: 15 }} />
            </div>
            <ul className="select-options" hidden={visibleSort.visible}>
              {/* <li
                rel="new"
                className="active"
                onClick={() => {
                  handleChangeSort("Sắp xếp: Mặc định");
                  CancelSortData();
                }}
              >
                Sắp xếp: Mặc định
              </li> */}
              <li
                rel="best"
                className=""
                onClick={() => {
                  handleChangeSort("Sắp xếp: Giá thấp đến cao");
                  sortIncreaseData();
                }}
              >
                Sắp xếp: Giá thấp đến cao
              </li>
              <li
                rel="best"
                className=""
                onClick={() => {
                  handleChangeSort("Sắp xếp: Giá cao đến thấp");
                  sortDecreaseData();
                }}
              >
                Sắp xếp: Giá cao đến thấp
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="list-product">
        {data &&
          data.map((item, index) => {
            return (
              <div className="item-product" key={item._id}>
                <div className="card_all_product">
                  <div className="card_img">
                    <img
                      src={
                        process.env.REACT_APP_API_ENDPOINT +
                        "/product/photo/" +
                        item._id
                      }
                      alt="product"
                    />
                  </div>
                  <div className="card-name-product">
                    <h2>Name:{item.name}</h2>
                  </div>
                  <div className="info_price">
                    <p className="price">Price:{item.price}</p>
                    <button className="btn-add-cart">
                      <UilShoppingCartAlt />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
