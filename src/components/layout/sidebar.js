import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  CarFilled,
  HomeOutlined,
  DollarCircleOutlined,
  BankOutlined
} from "@ant-design/icons";
import "../../assets/styles/sidebar.scss";
import Bangsam from "../../assets/icons/logo-items/bangsam_white.png";

const { Sider } = Layout;

const dashboard = () => {
  return (
    <Layout className="dashboard-sidebar">
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DollarCircleOutlined />
            <span className="nav-text">Transactions</span>
          </Menu.Item>
          <Menu.Item key="3">
            <BankOutlined />
            <span className="nav-text">Branches</span>
          </Menu.Item>
          <Menu.Item key="4">
            <UserOutlined />
            <span className="nav-text">Customers</span>
          </Menu.Item>
          <Menu.Item key="5">
            <CarFilled />
            <span className="nav-text">Pick-up Request</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default dashboard;
