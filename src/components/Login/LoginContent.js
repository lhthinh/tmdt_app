import { Modal } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unshow } from "./LoginSlice";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";
export default function LoginContent() {
  const visible = useSelector((state) => state.login.visible);
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(unshow());
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal visible={visible} onCancel={handleCancel}>
      <Form
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
        <Form.Item className="form-name">ASICC</Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
          <Button type="primary" htmlType="submit" className="btn-login">
            LOGIN
          </Button>
          <a href="#" className="forgot-password-login">
            Forgot Password ?
          </a>
        </Form.Item>
      </Form>
    </Modal>
  );
}
