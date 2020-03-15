import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../assets/icons/logo-items/bangsam.png";
import "../../assets/styles/users.scss";

const { Title } = Typography;

const SignUp = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="users">
      <Form
        name="register"
        className="login-form"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
      >
        <img src={Logo} alt="logo"></img>
        <Title>WELCOME!</Title>
        <p className="users__text">Create your account</p>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!"
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
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
            placeholder="Email"
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
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              }
            })
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password Confirmation"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign up
          </Button>
          Don't have any account? <a href="">Sign in now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
