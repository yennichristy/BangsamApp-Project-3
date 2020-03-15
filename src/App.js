import React from "react";
import "./App.css";
import DashboardRoutes from "./routes/dashboardRoutes";
import { Route } from "react-router-dom";
import Users from "./components/users/signUp";

const App = () => {
  return (
    <div>
      <Route path="/users" exact component={Users}></Route>
      {/* <DashboardRoutes /> */}
    </div>
  );
};

export default App;
