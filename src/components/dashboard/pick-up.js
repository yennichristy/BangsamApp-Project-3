import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../assets/styles/dashboard/dashboardDetails.scss";
import { getAllPickup } from "../../store/actions/pickupAction";

const Pickup = () => {
  //variable for dropdown
  const dropdown = (
    <Menu>
      <Menu.Item>All Requests</Menu.Item>
      <Menu.Item>On-Progress Requests</Menu.Item>
      <Menu.Item>Done Requests</Menu.Item>
      <Menu.Item>Canceled Requests</Menu.Item>
    </Menu>
  );

  //connect Redux to component
  const dispatch = useDispatch();
  const history = useHistory();
  const pickupData = useSelector(state => state.pickup.pickup);

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllPickup());
  }, [dispatch]);

  //variable for data source
  const tablePickup = pickupData.map(item => ({
    key: item._id,
    _id: item._id,
    customer: item.user.full_name,
    bank: item.branch.branch_name,
    //reduce for calculation, parseInt for change data type string to number
    weight:
      item.item_details.reduce((acc, curr) => acc + parseInt(curr.weight), 0) +
      " kg",
    amount: "Rp " + item.amount
  }));

  //variable for sorting data
  let [sorted, setSorted] = useState(null);

  sorted = sorted || {};

  //variable for handling data changes (filter, sort, clear)
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSorted(sorter);
  };

  const clearAll = () => {
    setSorted(null);
  };

  //variable for data presentation
  const columns = [
    {
      title: "CUSTOMER NAME",
      dataIndex: "customer",
      key: "customer",
      sorter: (a, b) => {
        return a.customer.localeCompare(b.customer);
      },
      sortOrder: sorted.columnKey === "customer" && sorted.order,
      ellipsis: true
    },
    {
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
      sorter: (a, b) => {
        return a.bank.localeCompare(b.bank);
      },
      sortOrder: sorted.columnKey === "bank" && sorted.order,
      ellipsis: true
    },
    {
      title: "TOTAL WEIGHT",
      dataIndex: "weight",
      key: "weight",
      sorter: (a, b) => {
        return a.weight.localeCompare(b.weight);
      },
      sortOrder: sorted.columnKey === "weight" && sorted.order,
      ellipsis: true
    },
    {
      title: "WASTE PRICE",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => {
        return a.amount.localeCompare(b.amount);
      },
      sortOrder: sorted.columnKey === "amount" && sorted.order,
      ellipsis: true
    }
  ];

  //variable for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    }
  };

  return (
    <div>
      <Dropdown overlay={dropdown}>
        <a className="dropdown" onClick={e => e.preventDefault()}>
          Pick-up Requests <DownOutlined />
        </a>
      </Dropdown>
      <div className="table">
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </div>
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={tablePickup}
        onChange={handleChange}
        onRow={r => ({
          onClick: () => {
            history.push(`/dashboard/pickup-requests/details/${r.key}`);
          }
        })}
      />
    </div>
  );
};

export default Pickup;
