import React, { useState } from "react";
import { Table, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../../assets/styles/dashboard/dashboardDetails.scss";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park"
  }
];

const dropdown = (
  <Menu>
    <Menu.Item>All Branches</Menu.Item>
    <Menu.Item>Active Branches</Menu.Item>
    <Menu.Item>Suspended Branches</Menu.Item>
  </Menu>
);

const Branches = () => {
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
        columnKey: "age"
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
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" }
      ],
      filteredValue: filtered.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sorted.columnKey === "name" && sorted.order,
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
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" }
      ],
      filteredValue: filtered.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sorted.columnKey === "address" && sorted.order,
      ellipsis: true
    },
    {
      title: "BALANCE",
      dataIndex: "balance",
      key: "balance",
      sorter: (a, b) => a.balance - b.balance,
      sortOrder: sorted.columnKey === "balance" && sorted.order,
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
          Branches <DownOutlined />
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

export default Branches;
