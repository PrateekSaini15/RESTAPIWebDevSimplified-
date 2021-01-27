import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteSubscriber } from "../../../actions/subscriberActions";

class SubscriberTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wantsToEdit: false,
      subscriber: {},
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(subscriber) {
    this.props.history.push("/subscriber/edit", subscriber);
  }

  render() {
    let subscriber = this.props.subscriber;
    subscriber.subscribeDate = new Date(subscriber.subscribeDate);
    return (
      <tr>
        <td>{subscriber.name}</td>
        <td>{subscriber.subscribedToChannel}</td>
        <td>{subscriber.subscribeDate.toDateString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteSubscriber(subscriber._id)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => this.handleEdit(subscriber)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { deleteSubscriber })(
  withRouter(SubscriberTableRow)
);
