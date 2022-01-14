/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Logo from "../../assets/icons/logo-items/bangsam.png";
import "../../assets/styles/users.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, clear } from "../../store/actions/userAction";

const { Title } = Typography;

const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, error } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    if (error !== null) {
      dispatch(clear());
    }
    dispatch(signIn(values));
    setLoading(true);
  };

  useEffect(() => {
    if (user !== null) {
      history.push("/dashboard");
    }
    if (error !== null) {
      setLoading(false);
    }
  }, [user, error]);

  return (
    <div className="users">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img src={Logo} alt="logo"></img>
        <Title level={2}>WELCOME TO BANGSAM!</Title>
        <p className="users__text">Create your account</p>
        <Form.Item
          name="phone_number"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="phone number"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
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
          <p className="login-form-forgot">Forgot password</p>
        </Form.Item>
        <Form.Item>
          {error !== null && (
            <p className="login-form-error">{error} Please try again.</p>
          )}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
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
