import React from "react";

export default class BookView extends React.Component {
  render() {
    return (
      <div className="row singlebook">
        <div className="col-md-4">
          <img
            src={this.props.book.image}
            width="75"
            height="100"
            alt={this.props.book.name}
          />
        </div>
        <div className="col-md-4">
          <b>{this.props.book.name}</b> <i>{this.props.book.author}</i>
          
          <br />
          <br />
        </div>
        <div className="col-md-4">
          <button
            onClick={() => this.props.addToOrder(this.props.book)}
            className="btn btn-sm btn btn-primary"
          >
            Dodaj do zamówienia
          </button>
        </div>
      </div>
    );
  }
}
