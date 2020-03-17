import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../assets/icons/logo-items/bangsam.png";
import "../../assets/styles/users.scss";

const { Title } = Typography;

const Users = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="users">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <img src={Logo} alt="logo"></img>
        <Title>WELCOME TO BANGSAM!</Title>
        <p className="users__text">Create your account</p>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!"
            }
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign in
          </Button>
          Don't have any account? <a href="/signup">Sign up now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Users;
