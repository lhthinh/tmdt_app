import React from "react";
import "./CartContent.scss";
import { useNavigate } from "react-router-dom";
export default function CartContent() {
  const navigate = useNavigate();
  return (
    <div className="cartBody">
      <div class="breadrumbs">
        <a onclick={(navigate = "/home")}>Trang Chủ</a>
        <p>/</p>
        <a onclick={(navigate = "/cart")}>Giỏ Hàng</a>
      </div>
    </div>
  );
}
