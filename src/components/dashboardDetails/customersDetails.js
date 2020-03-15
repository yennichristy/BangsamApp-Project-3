import React from "react";
import { Descriptions, Badge } from "antd";
import "../../assets/styles/dashboard/details.scss";

const customerDetails = () => {
  return (
    <div>
      <Descriptions title="Customer Details" layout="vertical" bordered>
        <Descriptions.Item label="Name">Jason Stingify</Descriptions.Item>
        <Descriptions.Item label="Email">jason@mail.com</Descriptions.Item>
        <Descriptions.Item label="Phone Number">08120987654</Descriptions.Item>
        <Descriptions.Item label="Created at">
          2018-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          2019-04-24 18:00:00
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge status="success" text="Active" />
        </Descriptions.Item>
        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
        <Descriptions.Item label="Amount of Waste">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="Address" layout="vertical" bordered>
        <Descriptions.Item label="Default Address">
          Jason Stingify
        </Descriptions.Item>
        <Descriptions.Item label="Work Address">
          jason@mail.com
        </Descriptions.Item>
        <Descriptions.Item label="Phone Number">08120987654</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default customerDetails;
