import React from "react";
import Header from "./Header";
import Orders from "./Orders";
import AdminPanel from "./AdminPanel";
import Inventory from "./Inventory";
import '../index.css';

class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <Header />
        <div className="row">
        <Inventory />
        <Orders />
        <AdminPanel />
        </div>
      </div>
    );
  }
}

export default App;
