import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../components/layout/layoutLandingPage";
import SignIn from "../components/users/signIn";
import SignUp from "../components/users/register";
import DashboardLayout from "../components/layout/layoutDasboard";
import Home from "../components/dashboard/home";
import Branches from "../components/dashboard/branches";
import Transactions from "../components/dashboard/transactions";
import Customers from "../components/dashboard/customers";
import Pickup from "../components/dashboard/pick-up";
import BranchesDetails from "../components/dashboardDetails/branchesDetails";
import CustomersDetails from "../components/dashboardDetails/customersDetails";
import TransactionsDetails from "../components/dashboardDetails/transactionsDetails";

const DashboardRoutes = () => {
  const login = true;

  if (login) {
    return (
      <div>
        <DashboardLayout>
          <Route path="/dashboard" exact component={Home} />
          <Route path="/dashboard/banks" exact component={Branches} />
          <Route
            path="/dashboard/transactions"
            exact
            component={Transactions}
          />
          <Route path="/dashboard/customers" exact component={Customers} />
          <Route path="/dashboard/pickup-requests" exact component={Pickup} />
          <Route
            path="/dashboard/banks/details/:id"
            exact
            component={BranchesDetails}
          />
          <Route
            path="/dashboard/customers/details"
            exact
            component={CustomersDetails}
          />
          <Route
            path="/dashboard/transactions/details"
            exact
            component={TransactionsDetails}
          />
        </DashboardLayout>
      </div>
    );
  } else {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </div>
    );
  }
};

export default DashboardRoutes;
