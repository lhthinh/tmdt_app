import { Modal } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unshow } from "./LoginSlice";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";
import { showRegister } from "../Register/RegisterSlice";
import { loginUser } from "../../app/apiRequest";
import { toastSuccess, toastError } from "../../app/toastSlice";
import { useNavigate } from "react-router-dom";

export default function LoginContent() {
  const visible = useSelector((state) => state.login.visible);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancel = () => {
    dispatch(unshow());
  };

  const onFinish = (values) => {
    try {
      const user = { email: values.email, password: values.password };
      loginUser(user, dispatch, navigate);
      dispatch(toastSuccess("Đăng nhập thành công"));
    } catch (err) {
      console.log(err);
      dispatch(toastError("Đăng nhập thất bại"));
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      style={{ paddingTop: 142 }}
      visible={visible}
      closable={false}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        className
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item className="form-name">Đăng nhập</Form.Item>
        <Form.Item
          label="Mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { max: 30, message: "Mật khẩu không được vượt quá 30 ký tự" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            className="btn-login"
            onClick={() => {
              form.submit();
            }}
          >
            LOGIN
          </Button>
          <a
            className="link-to-form-register"
            onClick={() => {
              handleCancel();
              dispatch(showRegister());
            }}
          >
            Đăng ký
          </a>
        </Form.Item>
      </Form>
    </Modal>
  );
}
