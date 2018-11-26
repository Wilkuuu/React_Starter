import React from "react";
import Header from "./Header";
import Orders from "./Orders";
import Inventory from "./Inventory";
import Footer from './Footer';
import "../index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      order: [],
    };
  }

  addToOrder = book => {
    this.setState({
      order: [...this.state.order, book]
    });
  };

 

  removeFromOrder = title => {
    this.setState({
      order: this.state.order.filter(book => title !== book.name)
    });
  };

  render() {
    return (
      <div className="app container">
        <Header />
        <div className="row">
          <Inventory books={this.state.books} addToOrder={this.addToOrder} />
          
          <Orders
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
        </div>
        <div className="row footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
