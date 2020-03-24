import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPickup } from "../../store/actions/pickupAction";
import { Descriptions, List, Spin, Card } from "antd";
import moment from "moment";
import "../../assets/styles/dashboard/dashboardDetails.scss";

const PickupsDetails = () => {
  //connect Redux to component
  const dispatch = useDispatch();
  const pickupDetails = useSelector(state => state.pickup.pickup);
  const param = useParams();

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllPickup());
  }, [dispatch]);

  //variable for filter data by id
  const pickupDetail = pickupDetails.filter(item => item._id === param.id)[0];

  //condition if the main data is not loaded
  if (!pickupDetail) return <Spin size="large" tip="Loading..." />;

  //variable for looping array data of waste details
  const wasteList = pickupDetail.item_details.map(type => ({
    waste: type.name,
    weight: type.weight
  }));

  //variable for pick up address
  const pickupAddress = pickupDetail.address;

  //variable for customer details
  const customerInfo = pickupDetail.user;

  //variable for bank details
  const bankInfo = pickupDetail.branch;

  //variable desructure data
  const {
    _id: idPickup,
    estimated_time: estimatedTime,
    amount,
    createdAt,
    updatedAt
  } = pickupDetail;

  const { village, regency, district, province } = pickupAddress;

  const {
    _id: idCustomer,
    full_name: fullName,
    phone_number: phoneNumber
  } = customerInfo;

  const {
    _id: idBank,
    branch_name: branchName,
    phone_number: phoneNumberBank,
    address
  } = bankInfo;

  return (
    <div>
      {/* Data display for general pick up info */}
      <Card className="pick-up">
        <Descriptions
          title="Pick Up Info"
          layout="vertical"
          size="small"
          bordered
        >
          <Descriptions.Item label="Pick Up ID">{idPickup}</Descriptions.Item>
          <Descriptions.Item label="Estimated Time">
            {estimatedTime}
          </Descriptions.Item>
          <Descriptions.Item label="Amount">
            {" "}
            Rp
            {amount}
          </Descriptions.Item>
          <Descriptions.Item label="Pick Up Address" span={3}>
            {`${village}, ${regency}, ${district}, ${province}`}
          </Descriptions.Item>
          <Descriptions.Item label="Waste Detail" span={3}>
            <List
              itemLayout="horizontal"
              grid={{ gutter: 10, column: 5 }}
              size="small"
              dataSource={wasteList}
              renderItem={item => (
                <List.Item>
                  <Card size="small" title={item.waste}>
                    {item.weight} kg
                  </Card>
                </List.Item>
              )}
            />
          </Descriptions.Item>
          <Descriptions.Item label="Created At">
            {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </Descriptions.Item>
          <Descriptions.Item label="Updated At" span={2}>
            {moment(updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      {/* Data display for customer pick up info */}
      <Card className="pick-up">
        <Descriptions
          title="Customer Info"
          layout="vertical"
          size="small"
          bordered
        >
          <Descriptions.Item label="Customer ID">
            {idCustomer}
          </Descriptions.Item>
          <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {phoneNumber}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      {/* Data display for bank pick up info */}
      <Card className="pick-up">
        <Descriptions title="Bank Info" layout="vertical" size="small" bordered>
          <Descriptions.Item label="Bank ID">{idBank}</Descriptions.Item>
          <Descriptions.Item label="Name">{branchName}</Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {phoneNumberBank}
          </Descriptions.Item>
          <Descriptions.Item label="Address">{address}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default PickupsDetails;
