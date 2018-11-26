import React from "react";
import AdminBookView from "./AdminBookView";

export default class AdminBookList extends React.Component {
  render() {
    let list;

    if (this.props.books) {
      list = this.props.books.map(book => (
        <AdminBookView
          key={book}
          book={book}
          delete={this.props.delete}
          editMode={this.props.editMode}
          editBook={this.props.editBook}
          handleChange={this.handleChange}
        />
      ));
    } else {
      list = <p>Brak książek</p>;
    }
    return (
      <div>
        <div>{list}</div>
      </div>
    );
  }
}
