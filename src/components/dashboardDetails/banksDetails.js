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

const BanksDetails = () => {
  return (
    <div>
      <Descriptions
        size="small"
        title="Branch Details"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Name">Jason Stingify</Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          jason@mail.com
        </Descriptions.Item>
        <Descriptions.Item label="Address">08120987654</Descriptions.Item>
        <Descriptions.Item label="Balance">$80.00</Descriptions.Item>
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
    </div>
  );
};

export default BanksDetails;
