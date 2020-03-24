import React, { useState, useEffect } from "react";
import { Table, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../assets/styles/dashboard/dashboardDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from "../../store/actions/customersAction";
import { useHistory } from "react-router-dom";

const Customers = () => {
  //variable for dropdown
  const dropdown = (
    <Menu>
      <Menu.Item>All Customers</Menu.Item>
      <Menu.Item>Active Customers</Menu.Item>
      <Menu.Item>Non-Active Cusstomers</Menu.Item>
    </Menu>
  );

  //variable for data sorting
  let [sorted, setSorted] = useState(null);

  sorted = sorted || {};

  //connect Redux to component
  const dispatch = useDispatch();
  const customerData = useSelector(state => state.customers.customers);
  const history = useHistory();

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllCustomers());
    //try to fix empty array warning
  }, [dispatch]);

  //variable for data source
  const tableCustomers = customerData.map(item => ({
    key: item._id,
    _id: item._id,
    role: item.role,
    first_name: item.first_name,
    email: item.email,
    phone: item.phone_number,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    addresses: item.addresses.length + " address",
    balance: item.balance
  }));

  //variable for handling data changes (filter, sort, clear)
  const handleChange = (pagination, sorter) => {
    console.log("Various parameters", pagination, sorter);
    setSorted(sorter);
  };

  //variable for button handling
  const clearFilters = () => {};

  const clearAll = () => {
    setSorted(null);
  };

  //variable for data presentation
  const columns = [
    {
      title: "NAME",
      dataIndex: "first_name",
      key: "first_name",
      sorter: (a, b) => {
        return a.first_name.localeCompare(b.first_name);
      },
      sortOrder: sorted.columnKey === "first_name" && sorted.order,
      ellipsis: true
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => {
        return a.email.localeCompare(b.email);
      },
      sortOrder: sorted.columnKey === "email" && sorted.order,
      ellipsis: true
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => {
        return a.phone.localeCompare(b.phone);
      },
      sortOrder: sorted.columnKey === "phone" && sorted.order,
      ellipsis: true
    },
    {
      title: "ADDRESS",
      dataIndex: "addresses",
      key: "addresses",
      sorter: (a, b) => {
        return a.addresses.localeCompare(b.addresses);
      },
      sortOrder: sorted.columnKey === "addresses" && sorted.order,
      ellipsis: true
    },
    {
      title: "BALANCE",
      dataIndex: "balance",
      key: "balance",
      sorter: (a, b) => {
        return a.balance.localeCompare(b.balance);
      },
      sortOrder: sorted.columnKey === "balance" && sorted.order,
      ellipsis: true
    }
  ];

  //variable for selection
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
          Customers <DownOutlined />
        </a>
      </Dropdown>
      <div className="table">
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </div>
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={tableCustomers}
        onChange={handleChange}
        onRow={r => ({
          onClick: () => {
            history.push(`/dashboard/customers/details/${r.key}`);
          }
        })}
      />
    </div>
  );
};

export default Customers;
