import React from "react";

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
      </tr>
    );
  }
}

export default SubscriberTableRow;
