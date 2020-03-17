import React from "react";
import { Descriptions, Badge, Menu, Dropdown, Button } from "antd";
import "../../assets/styles/dashboard/details.scss";

const menu = (
  <Menu>
    <Menu.Item>
      <Badge status="success" text="Active" />
    </Menu.Item>
    <Menu.Item>
      <Badge status="warning" text="Suspended" />
    </Menu.Item>
    <Menu.Item>
      <Badge status="error" text="Non-Active" />
    </Menu.Item>
  </Menu>
);

const CustomerDetails = () => {
  return (
    <div>
      <Descriptions
        size="small"
        title="Customer Details"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Name">Jason Stingify</Descriptions.Item>
        <Descriptions.Item label="Email">jason@mail.com</Descriptions.Item>
        <Descriptions.Item label="Phone Number">08120987654</Descriptions.Item>
        <Descriptions.Item label="Deposit">$80.00</Descriptions.Item>
        <Descriptions.Item label="Waste (kg) ">$20.00</Descriptions.Item>
        <Descriptions.Item label="Waste (Rp)">$60.00</Descriptions.Item>
        <Descriptions.Item label="Created at">
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Dropdown overlay={menu} placement="bottomRight">
            <Button className="statusbtn">Status</Button>
          </Dropdown>
        </Descriptions.Item>
      </Descriptions>
      <br></br>
      <Descriptions size="small" title="Address" layout="vertical" bordered>
        <Descriptions.Item label="Default Address">
          ajksndfaj asdnfjkas
        </Descriptions.Item>
        <Descriptions.Item label="Work Address">
          snfdjkasjasdn
        </Descriptions.Item>
        <Descriptions.Item label="Other Address">adskfjasdf</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default CustomerDetails;
