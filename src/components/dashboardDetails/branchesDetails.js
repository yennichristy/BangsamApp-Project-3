import React, { useEffect, useState } from "react";
import { Descriptions, Badge, Menu, Dropdown, Button, Spin } from "antd";
import "../../assets/styles/dashboard/details.scss";
import { getAllBranches } from "../../store/actions/branchesAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

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

const BranchesDetails = () => {
  const dispatch = useDispatch();
  const branchesDetails = useSelector(state => state.branches.branches);
  const param = useParams();

  useEffect(() => {
    dispatch(getAllBranches());
  }, [dispatch]);

  const branchDetail = branchesDetails.filter(item => item._id === param.id)[0];

  return branchDetail ? (
    <div>
      <Descriptions
        size="small"
        title="Branch Details"
        layout="vertical"
        bordered
      >
        <Descriptions.Item label="Name">
          {branchDetail.branch_name}
        </Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {branchDetail.phone_number}
        </Descriptions.Item>
        <Descriptions.Item label="Address">
          {branchDetail.address}
        </Descriptions.Item>
        <Descriptions.Item label="Balance">
          {branchDetail.balance}
        </Descriptions.Item>
        <Descriptions.Item label="Created at">
          {moment(branchDetail.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Updated at">
          {moment(branchDetail.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Dropdown overlay={menu} placement="bottomRight">
            <Button className="statusbtn">{branchDetail.blocked}Status</Button>
          </Dropdown>
        </Descriptions.Item>
      </Descriptions>
    </div>
  ) : (
    <Spin size="large" tip="Loading..." />
  );
};

export default BranchesDetails;
