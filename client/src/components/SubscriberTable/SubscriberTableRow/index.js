import React from "react";
import { connect } from "react-redux";

import { deleteSubscriber } from "../../../actions/subscriberActions";

class SubscriberTableRow extends React.Component {
  render() {
    let subscriber = this.props.subscriber;
    subscriber.subscribeDate = new Date(subscriber.subscribeDate);
    // console.log(typeof new Date(this.props.subscriber.subscribeDate));
    return (
      <tr>
        <td>{subscriber.name}</td>
        <td>{subscriber.subscribedToChannel}</td>
        <td>{subscriber.subscribeDate.toDateString()}</td>
        <td>
          <button onClick={() => this.props.deleteSubscriber(subscriber._id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteSubscriber })(SubscriberTableRow);
