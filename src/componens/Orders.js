import React from "react";
import OrderView from './OrderView';

class Orders extends React.Component {


  render() {

    const orderedBooks = this.props.order.map(order => {
      return <OrderView key={order.name} book={order} removeFromOrder={this.props.removeFromOrder}/>
    })

    return (
      <div className="orders col-md-6">
      <h2 >Zamówienie: </h2>
        <h1 className="orderedBook">{orderedBooks}</h1>
      </div>
    );
  }
}

export default Orders;
