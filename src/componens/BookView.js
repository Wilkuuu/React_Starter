import React from "react";

export default class BookView extends React.Component {
  render() {
   
    return (
      <div>
      {this.props.book.onStock && (
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
          <b>{this.props.book.name}</b> <i>{this.props.book.author} {this.props.book.price}</i>          
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
          
          
          <p className="description">{this.props.book.description}</p>
        </div>
       
          <span className="gatunek">{this.props.book.genre}</span>
      </div>
      )}
      </div>
    );
  }
}
