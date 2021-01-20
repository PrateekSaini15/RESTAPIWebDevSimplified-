import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import SubscriberTable from "./components/SubscriberTable/index";
import SubscriberAddForm from "./components/SubscriberAddForm/SubscriberAddForm";

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

  componentDidMount() {
    this.getSubscribers();
  }
  render() {
    if (this.state.subscriberTableData.length) {
      console.log(this.state.subscriberTableData);
      return (
        <>
          <h1>Subscribers</h1>
          <BrowserRouter>
            <nav>
              <ul>
                <li>
                  <Link to="/subscribersdetails">Subscribers Detail</Link>
                </li>
                <li>
                  <Link to="/subscriber/add">Add a Subscriber</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/subscriber/add">
                <SubscriberAddForm />
              </Route>
              <Route path="/subscribersdetails">
                <SubscriberTable
                  subscriberTableData={this.state.subscriberTableData}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
      );
    } else {
      return (
        <div>
          <h1>Loading Data</h1>
        </div>
      );
    }
  }
}

export default App;
