import { Modal } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unshow } from "./LoginSlice";
export default function LoginContent() {
  const visible = useSelector((state) => state.login.visible);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(unshow());
  };
  return (
    <Modal visible={visible} onCancel={handleCancel}>
      sadfasdfasfdas
    </Modal>
  );
}
