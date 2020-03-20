import React, { useEffect } from "react";
import { Descriptions, Badge, Menu, Spin, Card } from "antd";
import { getAllCustomers } from "../../store/actions/customersAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
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

const CustomersDetails = () => {
  const dispatch = useDispatch();
  const customersDetails = useSelector(state => state.customers.customers);
  const param = useParams();

  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  const customerDetail = customersDetails.filter(
    item => item._id === param.id
  )[0];
  console.log("lolo", customersDetails);
  console.log("lala", customerDetail);
  console.log("lalas", param.id);

  // const customerAddress = customersDetails.map(item => ({
  //   addresses: item.addresses
  // }));

  console.log(customerDetail);

  if (!customerDetail) return <Spin size="large" tip="Loading..." />;

  const { addresses } = customerDetail;
  console.log(addresses);

  return (
    <div>
      <Descriptions
        size="small"
        title="Customer Details"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Name">
          {customerDetail.full_name}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {customerDetail.email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {customerDetail.phone_number}
        </Descriptions.Item>
        <Descriptions.Item label="Balance">
          {customerDetail.balance}
        </Descriptions.Item>
        <Descriptions.Item label="Created at">
          {moment(customerDetail.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          {moment(customerDetail.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions size="small" title="Adresses" layout="vertical" bordered>
        <Descriptions.Item>
          {addresses.map(function(singleitem) {
            return (
              <>
                <div key={singleitem._id}>
                  {singleitem.village} {singleitem.regency}{" "}
                  {singleitem.district} {singleitem.province}
                </div>
                <hr />
              </>
            );
          })}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default CustomersDetails;
