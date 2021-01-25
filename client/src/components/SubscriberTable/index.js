import React from "react";
import Row from "./SubscriberTableRow/index";
import { connect } from "react-redux";
import { getSubscribers } from "../../actions/subscriberActions";

class SubscriberTable extends React.Component {
  componentDidMount() {
    this.props.getSubscribers();
  }
  render() {
    // console.log(this.props.subscriberTableData);
    const subscribersRows = this.props.subscriberTableData.map((subscriber) => (
      <Row key={subscriber._id} subscriber={subscriber} />
    ));
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subscribed to Channel</th>
            <th scope="col">Subscribed Date</th>
          </tr>
        </thead>
        <tbody>{subscribersRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (store) => {
  return { subscriberTableData: store.subscriber.subscribers };
};

export default connect(mapStateToProps, { getSubscribers })(SubscriberTable);
