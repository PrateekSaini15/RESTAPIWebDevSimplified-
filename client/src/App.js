import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import SubscriberTable from "./components/SubscriberTable/index";
import SubscriberAddForm from "./components/SubscriberAddForm/SubscriberAddForm";
import SubscriberEditForm from "./components/SubscriberEditForm/SubscribereEditForm";
import NavBar from "./components/NavBar/NavBarComponent";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Subscribers</h1>
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route path="/subscriber/add">
                <SubscriberAddForm />
              </Route>
              <Route path="/subscribersdetails">
                <SubscriberTable />
              </Route>
              <Route path="/subscriber/edit">
                <SubscriberEditForm />
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
