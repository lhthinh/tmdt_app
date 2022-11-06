import { Modal } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import "./register.scss";
import { unshowRegister } from "./RegisterSlice";
export default function RegisterContent() {
  const visible = useSelector((state) => state.register.visible);
  console.log(visible);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(unshowRegister());
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //   const handleOpen = () => {
  //     dispatch(show());
  //   };
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
        <Form.Item className="form-name">Đăng ký</Form.Item>
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
            { max: 30, message: "Mật khẩu không được vượt quá 30 ký tự" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="ConfirmPassword"
          name="confirmpassword"
          rules={[
            {
              required: true,
              message: "Please input your confirm password!",
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
            Register
          </Button>
          <a className="link-to-form-login">Đăng nhập</a>
        </Form.Item>
      </Form>
    </Modal>
  );
}
