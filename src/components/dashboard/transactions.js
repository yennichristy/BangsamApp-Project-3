import React, { useState } from "react";
import { Table, Button, Typography } from "antd";
import "../../assets/styles/dashboard/dashboardDetails.scss";

const data = [
  {
    key: "1",
    id: "202001",
    type: 2,
    name: "Ricky",
    branch: "Bank KDA",
    amount: 40000,
    created: "10/03/2020",
    updated: "13/03/2020",
    status: "Completed"
  },
  {
    key: "1",
    id: "202002",
    type: 2,
    name: "Jason",
    branch: "Bank Rusun",
    amount: 40000,
    created: "10/03/2020",
    updated: "13/03/2020",
    status: "Canceled"
  }
];

const Transactions = () => {
  let [filtered, setFiltered] = useState(null);
  let [sorted, setSorted] = useState(null);

  const { Title } = Typography;

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
      title: " TRANSACTION ID",
      dataIndex: "id",
      key: "id",
      filters: [
        { text: "202001", value: "202001" },
        { text: "202002", value: "202002" }
      ],
      filteredValue: filtered.id || null,
      onFilter: (value, record) => record.id.includes(value),
      sorter: (a, b) => a.id - b.id,
      sortOrder: sorted.columnKey === "id" && sorted.order,
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
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Completed", value: "Completed" },
        { text: "Canceled", value: "Canceled" }
      ],
      filteredValue: filtered.status || null,
      onFilter: (value, record) => record.status.includes(value),
      sorter: (a, b) => a.status.length - b.status.length,
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
      <Title>Transactions</Title>
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

export default Transactions;
