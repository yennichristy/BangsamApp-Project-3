import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Logo from "../../assets/icons/logo-items/bangsam.png";
import "../../assets/styles/users.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../../store/actions/userAction";

const { Title } = Typography;

const Users = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = values => {
    console.log("Received values of form: ", values);
    dispatch(signIn(values));
    history.push("/dashboard");
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
          name="phone_number"
          rules={[
            {
              required: true,
              message: "Please input your email!"
            }
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
