import React from "react";
import { Route } from "react-router-dom";
import Layout from "../components/layout/layoutDasboard";
import Home from "../components/dashboard/home";
import Branches from "../components/dashboard/branches";
import Transactions from "../components/dashboard/transactions";
import Customers from "../components/dashboard/customers";
import Pickup from "../components/dashboard/pick-up";
import Details from "../components/dashboardDetails/customersDetails";

const DashboardRoutes = () => {
  return (
    <div>
      <Route>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/branches" exact component={Branches} />
          <Route path="/transactions" exact component={Transactions} />
          <Route path="/customers" exact component={Customers} />
          <Route path="/pickup-requests" exact component={Pickup} />
          <Route path="/details" exact component={Details} />
        </Layout>
      </Route>
    </div>
  );
};

export default DashboardRoutes;
