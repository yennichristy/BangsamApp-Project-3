import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import {
  TeamOutlined,
  BankFilled,
  CarFilled,
  DollarCircleFilled
} from "@ant-design/icons";
import "../../assets/styles/dashboard/home.scss";
import { getDashboardData } from "../../store/actions/homeAction";
import formatDigit from "../../helpers";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector(state => state.dashboard.dashboard);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return (
    <div className="content" style={{ padding: 24, minHeight: 360 }}>
      <div className="content__data">
        <Row gutter={20}>
          <Col span={6}>
            <Card className="content__data__details">
              <BankFilled />
              <span>Total Bank</span>
              <p>{dashboardData && dashboardData.branch.total}</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="content__data__details">
              <BankFilled />
              <span>Suspended Bank</span>
              <p>{dashboardData && dashboardData.branch.suspended}</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="content__data__details">
              <TeamOutlined />
              <span>Total Customer</span>
              <p>{dashboardData && dashboardData.customer.total}</p>
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
              <p>Rp {formatDigit(120000)}</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="content__data__details">
              <DollarCircleFilled />
              <span>Total Amount of Withdrawn</span>
              <p>Rp {formatDigit(120000)}</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <Card className="content__data__details">
              <CarFilled />
              <span>Pick-up Request</span>
              <p>{dashboardData && dashboardData.pickups.total} requests</p>
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
  );
};

export default Dashboard;
