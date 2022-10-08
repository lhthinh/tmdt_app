import React from "react";
import { Outlet } from "react-router-dom";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Global() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
}
