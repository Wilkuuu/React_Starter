import React from "react";

export default class AdminBookView extends React.Component {
  render() {
    return (
      <div className="orderedView row">
        <div className="col-8">
          <span>
            {this.props.book.name} {this.props.book.author}
          </span>
        </div>
        <div className="col-2">
          <button
            className="btn btn-danger btn-sm"
            onClick={event => {
              this.props.delete(this.props.book.name);
            }}
          >
            Usuń
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={event => {
              this.props.editBook(this.props.book);
            }}
          >
            Edytuj
          </button>
        </div>
      </div>
    );
  }
}
