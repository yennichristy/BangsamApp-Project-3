import React, { useState } from "react";
import { Table, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../assets/styles/dashboard/dashboardDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomers } from "../../store/actions/customersAction";

const data = [
  {
    key: "1",
    name: "Ricky",
    email: "ricky@mail.com",
    address: "KDA Cluster Geltaik Blok G12",
    phone: "0812340987665",
    status: "active"
  },
  {
    key: "2",
    name: "Jason",
    email: "jason@mail.com",
    address: "Rusun BP",
    phone: "0812340981365",
    status: "suspended"
  },
  {
    key: "3",
    name: "Dallah",
    email: "dallah@mail.com",
    address: "Rusun BPJS",
    phone: "081234098111",
    status: "non-active"
  }
];

const dropdown = (
  <Menu>
    <Menu.Item>All Customers</Menu.Item>
    <Menu.Item>Active Customers</Menu.Item>
    <Menu.Item>Non-Active Cusstomers</Menu.Item>
  </Menu>
);

const Customers = () => {
  let [filtered, setFiltered] = useState(null);
  let [sorted, setSorted] = useState(null);

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFiltered(filters);
    setSorted(sorter);
  };

  const clearFilters = () => {
    setFiltered({ filtered: null });
  };

  const clearAll = () => {
    setFiltered(null);
    setSorted(null);
  };

  const setAgeSort = () => {
    setSorted({
      sorted: {
        order: "descend",
        columnKey: "type"
      }
    });
  };

  filtered = filtered || {};
  sorted = sorted || {};

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      filters: [
        { text: "Ricky", value: "Ricky" },
        { text: "Jason", value: "Jason" }
      ],
      filteredValue: filtered.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sorted.columnKey === "name" && sorted.order,
      ellipsis: true
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email - b.email,
      sortOrder: sorted.columnKey === "email" && sorted.order,
      ellipsis: true
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone - b.phone,
      sortOrder: sorted.columnKey === "phone" && sorted.order,
      ellipsis: true
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address - b.address,
      sortOrder: sorted.columnKey === "address" && sorted.order,
      ellipsis: true
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Active", value: "active" },
        { text: "Suspended", value: "suspended" },
        { text: "Non-Active", value: "non-active" }
      ],
      filteredValue: filtered.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status - b.status,
      sortOrder: sorted.columnKey === "status" && sorted.order,
      ellipsis: true
    }
  ];

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
        <Button onClick={setAgeSort}>Delete</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </div>
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={data}
        onChange={handleChange}
      />
    </div>
  );
};

export default Customers;
