import React from "react";
import { Descriptions, Badge } from "antd";
import "../../assets/styles/dashboard/details.scss";

const TransactionsDetails = () => {
  return (
    <div>
      <Descriptions title="Transactions Details" column={1}>
        <Descriptions.Item label="Id">202001</Descriptions.Item>
        <Descriptions.Item label="Type">2</Descriptions.Item>
      </Descriptions>
      <Descriptions title="Order" layout="vertical" size="small" bordered>
        <Descriptions.Item label="Customer Name">Jason</Descriptions.Item>
        <Descriptions.Item label="Customer Phone Number">
          081234454689
        </Descriptions.Item>
        <Descriptions.Item label="Pick-up Address">
          Jln. Hang Hebat No. 95
        </Descriptions.Item>
        <Descriptions.Item label="Branch">Bank KDA</Descriptions.Item>
        <Descriptions.Item label="Branch Phone Number">
          021 8093828
        </Descriptions.Item>
        <Descriptions.Item label="Branch Address">Bank KDA</Descriptions.Item>
        <Descriptions.Item label="Waste Type">Woods</Descriptions.Item>
        <Descriptions.Item label="Waste Weight">5 kg</Descriptions.Item>
        <Descriptions.Item label="Price">40000</Descriptions.Item>
        <Descriptions.Item label="Transaction Status">
          <Badge status="success" text="Active" />
        </Descriptions.Item>
        <Descriptions.Item label="Created at">10/03/2020</Descriptions.Item>
        <Descriptions.Item label="Updated at">13/03/2020</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default TransactionsDetails;
