import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, message, Input } from "antd";
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

const { Header, Content, Footer, Sider } = Layout;

const { Search } = Input;

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <LogoutOutlined />
      Log out
    </Menu.Item>
  </Menu>
);

const dashboard = props => {
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
          <img src={Bangsam} alt="Bangsam"></img>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <HomeOutlined />
            <Link to={"/"}>
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <DollarCircleOutlined />
            <Link to={"/transactions"}>
              <span className="nav-text">Transactions</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <BankOutlined />
            <Link to={"/branches"}>
              <span className="nav-text">Branches</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <UserOutlined />
            <Link to={"/customers"}>
              <span className="nav-text">Customers</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <CarFilled />
            <Link to={"/pickup-requests"}>
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
          <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
            Admin Name
          </Dropdown.Button>
          <Search
            placeholder="Search"
            onSearch={value => console.log(value)}
            style={{ width: 400 }}
          />
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="content" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Bangsam ©2020</Footer>
      </Layout>
    </Layout>
  );
};

export default dashboard;
