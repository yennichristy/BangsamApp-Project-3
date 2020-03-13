import React from "react";
import "./App.css";
import Users from "./components/users";
import Sidebar from "./components/layout/sidebar";
import TopNav from "./components/layout/topNav";
import Content from "./components/dashboardHome";

const App = () => {
  return (
    <div>
      {/* <Users /> */}
      <Content />
      <TopNav />
      <Sidebar />
    </div>
  );
};

export default App;
