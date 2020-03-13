import React from "react";
import { Layout, Menu, Dropdown, message, Input } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import "../../assets/styles/topNav.scss";

const { Header } = Layout;

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

const dashboard = () => {
  return (
    <Layout className="dashboard-topnav">
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
    </Layout>
  );
};

export default dashboard;
