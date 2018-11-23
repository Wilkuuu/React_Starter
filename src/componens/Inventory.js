import React from "react";
import BookView from "./BookView";
import { fbase, firebaseApp } from "../fbase";

class Inventory extends React.Component {
  constructor() {
    super();
    this.state = {
        books:[]
    };
  }

  componentDidMount() {
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  render() {
    let bookList = <h4> Brak danych</h4>;

    if (Array.isArray(this.state.books)) {
      bookList = this.state.books.map(book => {
        return <BookView key={book.name} book={book} addToOrder={this.props.addToOrder} />;
      });     
    }

    return (
      <div className="inventory col-md-6">
        <div className="list_title"> Lista książek: </div>
        {bookList}
      </div>
    );

  }
}

export default Inventory;
