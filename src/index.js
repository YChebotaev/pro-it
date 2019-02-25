import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import { ApolloProvider } from "react-apollo-hooks";
import { createApolloClient } from "./lib/createApolloClient";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ServicesPage } from "./pages/ServicesPage";
import { DepartamentsPage } from "./pages/DepartamentsPage";
import { EditServicePage } from "./pages/EditServicePage";
import { AddServicePage } from "./pages/AddServicePage";
import { AddDepartamentPage } from "./pages/AddDepartamentPage";
import { EditDepartamentPage } from "./pages/EditDepartamentPage";

import "@patternfly/react-core/dist/styles/base.css";
import "./styles/main.css";

const apolloClient = createApolloClient();

const app = (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/services/" component={ServicesPage} />
        <Route exact path="/services/add" component={AddServicePage} />
        <Route
          exact
          path="/services/:serviceId/edit"
          component={EditServicePage}
        />
        <Route exact path="/departaments/" component={DepartamentsPage} />
        <Route exact path="/departaments/add" component={AddDepartamentPage} />
        <Route
          exact
          path="/departaments/:departamentId/edit"
          component={EditDepartamentPage}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
