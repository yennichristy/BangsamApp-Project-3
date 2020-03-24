import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPickup } from "../../store/actions/pickupAction";
import { Descriptions, List, Spin, Card } from "antd";
import moment from "moment";
import "../../assets/styles/dashboard/dashboardDetails.scss";

const PickupsDetails = () => {
  const dispatch = useDispatch();
  const pickupDetails = useSelector(state => state.pickup.pickup);
  const param = useParams();

  useEffect(() => {
    dispatch(getAllPickup());
  }, [dispatch]);

  const pickupDetail = pickupDetails.filter(item => item._id === param.id)[0];

  console.log("pickup", pickupDetail);

  if (!pickupDetail) return <Spin size="large" tip="Loading..." />;

  const wasteList = pickupDetail.item_details.map(type => ({
    waste: type.name,
    weight: type.weight
  }));

  const pickupAddress = pickupDetail.address;

  const customerInfo = pickupDetail.user;

  const bankInfo = pickupDetail.branch;

  return (
    <div>
      <Card className="pick-up">
        <Descriptions
          title="Pick Up Info"
          layout="vertical"
          size="small"
          bordered
        >
          <Descriptions.Item label="Pick Up ID">
            {pickupDetail._id}
          </Descriptions.Item>
          <Descriptions.Item label="Estimated Time">
            {pickupDetail.estimated_time}
          </Descriptions.Item>
          <Descriptions.Item label="Amount">
            {" "}
            Rp
            {pickupDetail.amount}
          </Descriptions.Item>
          <Descriptions.Item label="Pick Up Address" span={3}>
            {`${pickupAddress.village}, ${pickupAddress.regency}, ${pickupAddress.district}, ${pickupAddress.province}`}
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
            {moment(pickupDetail.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </Descriptions.Item>
          <Descriptions.Item label="Updated At" span={2}>
            {moment(pickupDetail.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card className="pick-up">
        <Descriptions
          title="Customer Info"
          layout="vertical"
          size="small"
          bordered
        >
          <Descriptions.Item label="Customer ID">
            {customerInfo._id}
          </Descriptions.Item>
          <Descriptions.Item label="Name">
            {customerInfo.full_name}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {customerInfo.phone_number}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card className="pick-up">
        <Descriptions title="Bank Info" layout="vertical" size="small" bordered>
          <Descriptions.Item label="Bank ID">{bankInfo._id}</Descriptions.Item>
          <Descriptions.Item label="Name">
            {bankInfo.branch_name}
          </Descriptions.Item>
          <Descriptions.Item label="Phone Number">
            {bankInfo.phone_number}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {bankInfo.address}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default PickupsDetails;
