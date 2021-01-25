import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";

import SubscriberTable from "./components/SubscriberTable/index";
import SubscriberAddForm from "./components/SubscriberAddForm/SubscriberAddForm";
import NavBar from "./components/NavBar/NavBarComponent";
import store from "./store";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getSubscribers = this.getSubscribers.bind(this);
    this.state = {
      subscriberTableData: [],
    };
  }

  getSubscribers = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/subscribers`);
      this.setState({ subscriberTableData: res.data });
    } catch (error) {
      console.log(error.message);
    }
  };

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
            </Switch>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
