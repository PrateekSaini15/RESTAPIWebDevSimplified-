import React from "react";
import axios from "axios";

import SubscriberTable from "./components/SubscriberTable/index";

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
          <h1>Subscribers Details</h1>
          <SubscriberTable
            subscriberTableData={this.state.subscriberTableData}
          />
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
