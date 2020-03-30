import React, { useEffect } from "react";
import { Descriptions, Spin } from "antd";
import { getAllCustomers } from "../../store/actions/customersAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import "../../assets/styles/dashboard/details.scss";

const CustomersDetails = () => {
  //connect Redux to component
  const dispatch = useDispatch();
  const customersDetails = useSelector(state => state.customers.customers);
  const param = useParams();

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  //variable for filter data by id
  const customerDetail = customersDetails.filter(
    item => item._id === param.id
  )[0];

  //condition if the main data is not loaded
  if (!customerDetail) return <Spin size="large" tip="Loading..." />;

  //variable destructure filter data by id
  const {
    full_name: fullName,
    email,
    phone_number: phoneNumber,
    balance,
    createdAt,
    updatedAt,
    addresses
  } = customerDetail;

  return (
    <div>
      <Descriptions
        size="small"
        title="Customer Details"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Balance">{balance}</Descriptions.Item>
        <Descriptions.Item label="Created at">
          {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          {moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions size="small" title="Adresses" layout="vertical" bordered>
        <Descriptions.Item>
          {addresses.map(function(singleitem) {
            return (
              <>
                <div key={singleitem._id}>
                  {singleitem.address_detail}
                  {","} {singleitem.village}
                  {","} {singleitem.regency}
                  {","} {singleitem.district}
                  {","} {singleitem.province}
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
