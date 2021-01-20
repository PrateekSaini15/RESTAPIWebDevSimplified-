import React from "react";
import Row from "./SubscriberTableRow/index";

class SubscriberTable extends React.Component {
  render() {
    const subscribersRows = this.props.subscriberTableData.map((subscriber) => (
      <Row key={subscriber._id} subscriber={subscriber} />
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subscribed to Channel</th>
            <th>Subscribed Date</th>
          </tr>
        </thead>
        <tbody>{subscribersRows}</tbody>
      </table>
    );
  }
}

export default SubscriberTable;
