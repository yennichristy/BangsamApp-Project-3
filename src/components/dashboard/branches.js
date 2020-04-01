import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Button, Typography, Input, Spin } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Highlighter } from "react-highlight-words";
import "../../assets/styles/dashboard/dashboardDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBranches,
  deleteBranch
} from "../../store/actions/branchesAction";
import moment from "moment";

const Branches = () => {
  const { Title } = Typography;

  //connect Redux to component
  const dispatch = useDispatch();
  const branchesData = useSelector(state => state.branches.branches);
  const history = useHistory();

  //use effect for dispatch data from redux
  useEffect(() => {
    dispatch(getAllBranches());
    //try to fix empty array warning
  }, [dispatch]);

  //variable for data source
  const tableBranches = branchesData.map(item => ({
    key: item._id,
    _id: item._id,
    branch_name: item.branch_name,
    phone_number: item.phone_number,
    address: item.address,
    createdAt: moment(item.createdAt).format("LL"),
    updatedAt: moment(item.updatedAt).format("LL"),
    balance: item.balance,
    blocked: item.blocked
  }));

  //variable for data sorting
  let [sorted, setSorted] = useState(null);

  sorted = sorted || {};

  let searchInput = false;

  const [state, setState] = useState({
    searchText: "",
    searchedColumn: ""
  });

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: text =>
      state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setState({ searchText: "" });
  };

  //variable for data presentation
  const columns = [
    {
      title: "NAME",
      dataIndex: "branch_name",
      key: "branch_name",
      onFilter: (value, record) => record.branch_name.indexOf(value) === 0,
      sorter: (a, b) => {
        return a.branch_name.localeCompare(b.branch_name);
      },
      sortOrder: sorted.columnKey === "branch_name" && sorted.order,
      ...getColumnSearchProps("branch_name"),
      ellipsis: true
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phone_number",
      key: "phone_number",
      sorter: (a, b) => {
        return a.phone_number.localeCompare(b.phone_number);
      },
      sortOrder: sorted.columnKey === "phone_number" && sorted.order,
      ellipsis: true
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => {
        return a.address.localeCompare(b.address);
      },
      sortOrder: sorted.columnKey === "address" && sorted.order,
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
    },
    {
      title: "CREATED AT",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => {
        return a.createdAt.localeCompare(b.createdAt);
      },
      sortOrder: sorted.columnKey === "createdAt" && sorted.order,
      ellipsis: true
    },
    {
      title: "UPDATED AT",
      dataIndex: "updatedAt",
      key: "updatedAt",
      sorter: (a, b) => {
        return a.updatedAt.localeCompare(b.updatedAt);
      },
      sortOrder: sorted.columnKey === "updatedAt" && sorted.order,
      ellipsis: true
    }
  ];

  //variable for handling data changes (filter, sort, clear)
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setSorted(sorter);
  };

  const clearAll = () => {
    setSorted(null);
  };

  //variable for check box selection
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

  if (!tableBranches) return <Spin size="large" tip="Loading..." />;

  return (
    <div>
      <Title>Branches</Title>
      <div className="table">
        <Button onClick={clearAll}>Clear sorters</Button>
        <Button onClick={() => deleteBranch(branch_id)}>Delete</Button>
      </div>
      <Table
        columns={columns}
        rowSelection={rowSelection}
        dataSource={tableBranches}
        onChange={handleChange}
        onRow={(r, i) => ({
          onClick: () => {
            history.push(`/dashboard/banks/details/${r.key}`);
          }
        })}
      />
    </div>
  );
};

export default Branches;
