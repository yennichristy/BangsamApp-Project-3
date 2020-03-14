import React, { useState } from "react";
import { Table, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "../assets/styles/transactions.scss";

const data = [
  {
    key: "1",
    id: "202001",
    type: 2,
    customer: "Ricky",
    branch: "Bank KDA",
    amount: 40000,
    created: "10/03/2020",
    updated: "13/03/2020"
  },
  {
    key: "1",
    id: "202002",
    type: 2,
    customer: "Jason",
    branch: "Bank Rusun",
    amount: 40000,
    created: "10/03/2020",
    updated: "13/03/2020"
  }
];

const dropdown = (
  <Menu>
    <Menu.Item>All Transactions</Menu.Item>
    <Menu.Item>Completed Transactions</Menu.Item>
    <Menu.Item>Canceled Transactions</Menu.Item>
  </Menu>
);

const Transactions = () => {
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
      title: " TRANSACTION ID",
      dataIndex: "id",
      key: "id",
      filters: [
        { text: "Joe", value: "Joe" },
        { text: "Jim", value: "Jim" }
      ],
      filteredValue: filtered.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id.length - b.id.length,
      sortOrder: sorted.columnKey === "name" && sorted.order,
      ellipsis: true
    },
    {
      title: "TRANSACTION TYPE",
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type - b.type,
      sortOrder: sorted.columnKey === "type" && sorted.order,
      ellipsis: true
    },
    {
      title: "CUSTOMER",
      dataIndex: "customer",
      key: "customer",
      filters: [
        { text: "London", value: "London" },
        { text: "New York", value: "New York" }
      ],
      filteredValue: filtered.customer || null,
      onFilter: (value, record) => record.customer.includes(value),
      sorter: (a, b) => a.customer.length - b.customer.length,
      sortOrder: sorted.columnKey === "customer" && sorted.order,
      ellipsis: true
    },
    {
      title: "BRANCH",
      dataIndex: "branch",
      key: "branch",
      sorter: (a, b) => a.branch - b.branch,
      sortOrder: sorted.columnKey === "branch" && sorted.order,
      ellipsis: true
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => a.amount - b.amount,
      sortOrder: sorted.columnKey === "amount" && sorted.order,
      ellipsis: true
    },
    {
      title: "CREATED AT",
      dataIndex: "created",
      key: "created",
      sorter: (a, b) => a.created - b.created,
      sortOrder: sorted.columnKey === "created" && sorted.order,
      ellipsis: true
    },
    {
      title: "UPDATED AT",
      dataIndex: "updated",
      key: "updated",
      sorter: (a, b) => a.updated - b.updated,
      sortOrder: sorted.columnKey === "updated" && sorted.order,
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
        <a className="dropdown-transactions" onClick={e => e.preventDefault()}>
          Transactions <DownOutlined />
        </a>
      </Dropdown>
      <div className="table-transactions">
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

export default Transactions;
