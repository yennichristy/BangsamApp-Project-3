import React, { useEffect } from "react";
// import { blockBranch } from "../../store/actions/branchesAction";
import { Descriptions, Badge, Spin } from "antd";
import "../../assets/styles/dashboard/details.scss";
import { getAllBranches } from "../../store/actions/branchesAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

const BranchesDetails = () => {
  //connect Redux to component
  const dispatch = useDispatch();
  const branchesDetails = useSelector(state => state.branches.branches);
  const param = useParams();
  // const history = useHistory();

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllBranches());
  }, [dispatch]);

  //variable for filter data by id
  const branchDetail = branchesDetails.filter(item => item._id === param.id)[0];

  //condition if the main data is not loaded
  if (!branchDetail) return <Spin size="large" tip="Loading..." />;

  //variable for block status
  // const block = async id => {
  //   console.log("id", id);
  //   await dispatch(blockBranch(id));
  //   history.push("/dashboard/banks");
  // };

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
          {!blocked ? (
            <Badge status="success" text="Active" />
          ) : (
            <Badge status="error" text="Blocked" />
          )}
        </Descriptions.Item>
      </Descriptions>
      {/* <Button onClick={() => block(branchDetail._id)}>Block Bank</Button> */}
    </div>
  );
};

export default BranchesDetails;
