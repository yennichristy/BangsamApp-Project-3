import React from "react";
import "./App.css";
import DashboardRoutes from "./routes/dashboardRoutes";
import { Route } from "react-router-dom";
import Users from "./components/users/signUp";
import Landing from "./components/layout/layoutLandingPage";

const App = () => {
  return (
    <div>
      {/* <Route path="/users" exact component={Users}></Route> */}
      {/* <DashboardRoutes /> */}
      <Landing />
    </div>
  );
};

export default App;
