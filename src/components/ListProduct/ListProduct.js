import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./ListProductSlice";
import _ from "lodash";
export default function ListProduct() {
  const allProduct = useSelector((state) => state.listProduct.allProduct);
  const [data, setData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://635fd8033e8f65f283bcf2e7.mockapi.io/product")
      // .get("./ListProduct/apifake.json")
      .then((res) => {
        dispatch(getAllProduct(res.data));
        setData(res.data);
      });
  }, []);
  const sortData = () => {
    setData(_.sortBy(allProduct, "price").reverse());
  };
  return (
    <div style={{ paddingTop: 500 }}>
      <button
        type="checkbox"
        onClick={() => {
          sortData();
        }}
      >
        giảm dần
      </button>
      <p>Tất cả sản phẩm</p>
      {data &&
        data.map((item, index) => {
          return (
            <div>
              <img src={item.image} alt="product" />
              <p>Name:{item.name}</p>
              <p>Price:{item.price}</p>
            </div>
          );
        })}
    </div>
  );
}
