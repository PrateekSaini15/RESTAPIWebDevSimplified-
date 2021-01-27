import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { updateSubscriber } from "../../actions/subscriberActions";

class SubscriberEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriber: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateSubscriber(
      this.state.subscriber._id,
      this.state.subscriber
    );
  }

  handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({
      ...this.setState,
      subscriber: { ...this.state.subscriber, [inputName]: inputValue },
    });
  };

  componentDidMount() {
    const subscriber = this.props.location.state;
    this.setState({
      ...this.state,
      subscriber: subscriber,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            defaultValue={this.state.subscriber.name}
            onChange={this.handleChange}
          />
          <input
            name="subscribedToChannel"
            type="text"
            defaultValue={this.state.subscriber.subscribedToChannel}
            onChange={this.handleChange}
          />
          <button type="Submit">Submit</button>
        </form>
      </>
    );
  }
}

export default connect(null, { updateSubscriber })(
  withRouter(SubscriberEditForm)
);
