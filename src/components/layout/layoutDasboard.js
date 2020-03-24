import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/userAction";
import { Layout, Menu, Button, Avatar } from "antd";
import {
  UserOutlined,
  CarFilled,
  HomeOutlined,
  DollarCircleOutlined,
  BankOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import "../../assets/styles/dashboard/layout.scss";
import Bangsam from "../../assets/icons/logo-items/bangsam_white.png";

const { Header, Content, Sider } = Layout;

const DashboardLayout = props => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <Layout className="dashboard">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <img className="logo__bangsam" src={Bangsam} alt="Bangsam"></img>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <HomeOutlined />
            <Link to={"/dashboard"}>
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <DollarCircleOutlined />
            <Link to={"/dashboard/transactions"}>
              <span className="nav-text">Transactions</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <BankOutlined />
            <Link to={"/dashboard/banks"}>
              <span className="nav-text">Banks</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <UserOutlined />
            <Link to={"/dashboard/customers"}>
              <span className="nav-text">Customers</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <CarFilled />
            <Link to={"/dashboard/pickup-requests"}>
              <span className="nav-text">Pick-up Request</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 15 }}
        >
          <Button
            type="primary"
            shape="round"
            icon={<LogoutOutlined />}
            onClick={logOut}
          >
            Sign out
          </Button>
          <Avatar icon={<UserOutlined />} />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="content" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
