import React from "react";
import { connect } from "react-redux";

import { addSubscriber } from "../../actions/subscriberActions";

class SubscriberAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      subscribedToChannel: "",
    };
  }

  handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({ ...this.setState, [inputName]: inputValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSubscriber(this.state);
    this.state.name = "";
    this.state.subscribedToChannel = "";
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            onChange={this.handleChange}
          />
          <input
            name="subscribedToChannel"
            type="text"
            placeholder="Enter the channel you are subscribed to"
            onChange={this.handleChange}
          />
          <button type="Submit">Submit</button>
        </form>
      </>
    );
  }
}

export default connect(null, { addSubscriber })(SubscriberAddForm);
