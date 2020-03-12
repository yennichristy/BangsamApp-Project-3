import React from "react";
import { Layout, Menu, Card, Col, Row } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  BankFilled,
  CarFilled,
  DollarCircleFilled,
  HomeOutlined,
  DollarCircleOutlined,
  BankOutlined
} from "@ant-design/icons";
import "../assets/styles/dashboard.scss";
import Bangsam from "../assets/icons/logo-items/bangsam.png";

const { Header, Content, Footer, Sider } = Layout;

const dashboard = () => {
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
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        >
          <input
            className="site-layout-sub-header-background__input"
            placeholder="search"
          ></input>
          <p>Admin</p>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div className="content" style={{ padding: 24, minHeight: 360 }}>
            <div className="content__data">
              <Row gutter={20}>
                <Col span={6}>
                  <Card className="content__data__details">
                    <BankFilled />
                    <span>Total Bank</span>
                    <p>100</p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className="content__data__details">
                    <BankFilled />
                    <span>Suspended Bank</span>
                    <p>100</p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className="content__data__details">
                    <TeamOutlined />
                    <span>Total Customer</span>
                    <p>100</p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className="content__data__details">
                    <TeamOutlined />
                    <span>Suspended Customer</span>
                    <p>100</p>
                  </Card>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={6}>
                  <Card className="content__data__details">
                    <DollarCircleFilled />
                    <span>Total Deposit</span>
                    <p>100</p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className="content__data__details">
                    <DollarCircleFilled />
                    <span>Total Withdraw</span>
                    <p>100</p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className="content__data__details">
                    <DollarCircleFilled />
                    <span>Total Amount of Deposit</span>
                    <p>Rp 120.000.000</p>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card className="content__data__details">
                    <DollarCircleFilled />
                    <span>Total Amount of Withdrawn</span>
                    <p>Rp 120.000.000</p>
                  </Card>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={12}>
                  <Card className="content__data__details">
                    <CarFilled />
                    <span>Pick-up Request</span>
                    <p>100 requests</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card className="content__data__details">
                    <BankFilled />
                    <span>Banks' Deposit</span>
                    <p>100</p>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Bangsam ©2020</Footer>
      </Layout>
    </Layout>
  );
};

export default dashboard;
