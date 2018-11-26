import React from "react";
import { Link } from "react-router-dom";

export default class BookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      book: {
        name: "",
        author:"",
        description: "",
        image:"",
        onStock: true,
        price:""
      }
    };
  }

  render() {
    const label = this.props.editMode ? "Edytuj" : "Dodaj";

    return (
      <React.Fragment>
        <div className="adminpanel col-md-4">
          <form onSubmit={this.props.addNewBook}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nazwa ksiazki"
                id="name"
                name="name"
                className="form-control"
                onChange={this.props.handleChange}
                value={this.state.book.name || this.props.book.name}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Gatunek"
                id="genre"
                name="genre"
                className="form-control"
                onChange={this.props.handleChange}
                value={this.state.book.genre || this.props.book.genre}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Autor"
                id="author"
                name="author"
                className="form-control"
                onChange={this.props.handleChange}
                value={this.state.book.author || this.props.book.author}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Cena"
                id="price"
                name="price"
                className="form-control"
                onChange={this.props.handleChange}
                value={this.state.book.price || this.props.book.price}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Opis książki"
                id="description"
                name="description"
                className="form-control"
                onChange={this.props.handleChange}
                value={
                  this.props.book.description || this.props.book.description
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="onStock" className="form-check-label">
                Dostępność:
              </label>

              <input
                type="checkbox"
                id="onStock"
                name="onStock"
                className="form-check"
                onChange={this.props.handleChange}
                value={this.props.book.onStock}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Grafika"
                id="image"
                name="image"
                className="form-control"
                onChange={this.props.handleChange}
                value={this.props.book.image}
              />
            </div>
            <button type="submit" className="btn btn-success">
              {label}
            </button>
          </form>
          <button className="btn btn-sm btn-danger" onClick={this.props.logout}>
            Wyloguj
          </button>
          <Link to="/">
            <button className="btn btn-block btn-info">
              <i className="fa fa-home">Powrót</i>
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
