import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/userAction";
import { getCurrentUser } from "../../store/actions/customersAction";
import { Layout, Menu, Button, Dropdown } from "antd";
import {
  UserOutlined,
  CarFilled,
  HomeOutlined,
  BankOutlined,
  LogoutOutlined,
  DownOutlined
} from "@ant-design/icons";
import moment from "moment";
import "../../assets/styles/dashboard/layout.scss";
import Bangsam from "../../assets/icons/logo-items/bangsam_white.png";

const { Header, Content, Sider } = Layout;

const DashboardLayout = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(state => state.customers.currentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const logOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  const today = moment(new Date()).format("LL");

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={logOut}>
        <LogoutOutlined />
        Log out
      </Menu.Item>
    </Menu>
  );

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
            <BankOutlined />
            <Link to={"/dashboard/branches"}>
              <span className="nav-text">Branches</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <UserOutlined />
            <Link to={"/dashboard/customers"}>
              <span className="nav-text">Customers</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
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
          <Dropdown overlay={menu}>
            <Button className="user-name">
              {userName.first_name}
              <DownOutlined className="dropdown-btn" />
            </Button>
          </Dropdown>
          <Button className="date">{today}</Button>
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
