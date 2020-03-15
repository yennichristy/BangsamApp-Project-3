import React, { useState } from "react";
import { Table, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../assets/styles/dashboard/dashboardDetails.scss";

const data = [
  {
    key: "1",
    customer: "Ricky",
    address: "KDA Cluster Geltaik Blok G12",
    bank: "Bank KDA",
    bankaddress: "Batam",
    wastetype: "Plastic",
    wasteweight: "5kg",
    wastePrice: "Rp 10000"
  },
  {
    key: "2",
    customer: "Jason",
    address: "Rusun BP",
    bank: "Bank KDA",
    bankaddress: "Batam",
    wastetype: "Wood",
    wasteweight: "15kg",
    wastePrice: "Rp 20000"
  }
];

const dropdown = (
  <Menu>
    <Menu.Item>All Requests</Menu.Item>
    <Menu.Item>On-Progress Requests</Menu.Item>
    <Menu.Item>Done Requests</Menu.Item>
    <Menu.Item>Canceled Requests</Menu.Item>
  </Menu>
);

const Pickup = () => {
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
      title: "CUSTOMER",
      dataIndex: "customer",
      key: "customer",
      filters: [
        { text: "Ricky", value: "Ricky" },
        { text: "Jason", value: "Jason" }
      ],
      filteredValue: filtered.customer || null,
      onFilter: (value, record) => record.customer.includes(value),
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortOrder: sorted.columnKey === "customer" && sorted.order,
      ellipsis: true
    },
    {
      title: "CUSTOMER ADDRESS",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address - b.address,
      sortOrder: sorted.columnKey === "address" && sorted.order,
      ellipsis: true
    },
    {
      title: "BANK",
      dataIndex: "bank",
      key: "bank",
      sorter: (a, b) => a.bank - b.bank,
      sortOrder: sorted.columnKey === "phone" && sorted.order,
      ellipsis: true
    },
    {
      title: "BANK ADDRESS",
      dataIndex: "bankadd",
      key: "bankadd",
      sorter: (a, b) => a.bankadd - b.bankadd,
      sortOrder: sorted.columnKey === "bankadd" && sorted.order,
      ellipsis: true
    },
    {
      title: "WASTE",
      dataIndex: "waste",
      key: "waste",
      filters: [
        { text: "Plastic", value: "plastic" },
        { text: "Wood", value: "Wood" }
      ],
      filteredValue: filtered.waste || null,
      onFilter: (value, record) => record.waste.includes(value),
      sorter: (a, b) => a.waste - b.waste,
      sortOrder: sorted.columnKey === "waste" && sorted.order,
      ellipsis: true
    },
    {
      title: "WASTE WEIGHT",
      dataIndex: "weight",
      key: "weight",
      sortOrder: sorted.columnKey === "weight" && sorted.order,
      ellipsis: true
    },
    {
      title: "WASTE PRICE",
      dataIndex: "price",
      key: "price",
      sortOrder: sorted.columnKey === "price" && sorted.order,
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
          Pick-up Requests <DownOutlined />
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

export default Pickup;
