import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Users from "./components/users";
import Layout from "./components/layout";
import Home from "./components/dashboardHome";
import Branches from "./components/branches";
import Transactions from "./components/transactions";

const App = () => {
  return (
    <div>
      <Route>
        <Layout>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/branches" exact>
            <Branches />
          </Route>
          <Route path="/transactions" exact>
            <Transactions />
          </Route>
        </Layout>
      </Route>
    </div>
  );
};

export default App;
