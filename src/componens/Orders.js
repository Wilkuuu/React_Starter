import React from "react";
import OrderView from './OrderView';

class Orders extends React.Component {


  render() {

    const orderedBooks = this.props.order.map(order => {
      return <OrderView book={order} removeFromOrder={this.props.removeFromOrder}/>
    })

    return (
      <div className="orders col-md-4">
        <h1>{orderedBooks}</h1>
      </div>
    );
  }
}

export default Orders;
