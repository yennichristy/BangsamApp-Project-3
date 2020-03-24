import React, { useEffect } from "react";
import { Descriptions, Badge, Menu, Dropdown, Button, Spin } from "antd";
import "../../assets/styles/dashboard/details.scss";
import { getAllBranches } from "../../store/actions/branchesAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

const BranchesDetails = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Badge status="success" text="Active" />
      </Menu.Item>
      <Menu.Item>
        <Badge status="error" text="Blocked" />
      </Menu.Item>
    </Menu>
  );

  //connect Redux to component
  const dispatch = useDispatch();
  const branchesDetails = useSelector(state => state.branches.branches);
  const param = useParams();

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllBranches());
  }, [dispatch]);

  //variable for filter data by id
  const branchDetail = branchesDetails.filter(item => item._id === param.id)[0];

  //condition if the main data is not loaded
  if (!branchDetail) return <Spin size="large" tip="Loading..." />;

  //variable destructure data
  const {
    branch_name: branchName,
    phone_number: phoneNumber,
    address,
    balance,
    createdAt,
    updatedAt,
    blocked
  } = branchDetail;

  return (
    <div>
      <Descriptions
        size="small"
        title="Branch Details"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Name">{branchName}</Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Address">{address}</Descriptions.Item>
        <Descriptions.Item label="Balance">{balance}</Descriptions.Item>
        <Descriptions.Item label="Created at">
          {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          {moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Dropdown overlay={menu} placement="bottomRight">
            <Button className="statusbtn">{blocked}Status</Button>
          </Dropdown>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default BranchesDetails;
