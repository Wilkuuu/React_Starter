import React from "react";
import OrderView from './OrderView';

class Orders extends React.Component {


  render() {
    const total = this.props.order.reduce((sum, book) => sum + parseInt(book.price), 0);

    const orderedBooks = this.props.order.map(order => {
      return <OrderView key={order.name} book={order} removeFromOrder={this.props.removeFromOrder} total={total}/>
      
    })

    return (
      <div className="orders col-md-6">
      <div className="row">
      <h2 >Zamówienie: </h2>
      <p>Cena łączna : {total}</p>
      </div>
        <h1 className="orderedBook">{orderedBooks}</h1> 
      </div>
    );  
  }
}

export default Orders;
