import React from "react";
import { Card, Col, Row } from "antd";
import {
  TeamOutlined,
  BankFilled,
  CarFilled,
  DollarCircleFilled
} from "@ant-design/icons";
import "../assets/styles/dashboardHome.scss";
import formatDigit from "../helpers";

const dashboard = () => {
  return (
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
  );
};

export default dashboard;
