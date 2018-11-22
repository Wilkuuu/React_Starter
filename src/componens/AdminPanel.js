import React from "react";
import { fbase } from "../fbase";

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: false,
        image: ""
      }
    };
  }

  handleChange = event => {
    let newBook;

    if (event.target.name === "onStock") {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.checked
      };
    } else {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.value
      };
    }
    this.setState({
      book: newBook
    });
  };

  addNewBook = (event) => {
    // event.preventDefault();
    // let newBook = { ...this.state.book };

    // // this.props.addBook(newBook);

    // this.setState({
    //   books: [...this.state.books, newBook]
    // });

    // let resetBook = { ...this.state.book };
    // Object.keys(resetBook).map(key => {
    //   resetBook[key] = typeof resetBook[key] === "boolean" ? false : "";
    // });

    // this.setState({
    //   book: resetBook
    // });

    event.preventDefault();
    let newBook ={...this.state.book};

    this.setState({
      books: [...this.state.books, newBook],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      }
    });



  };





  componentDidMount() {
   this.ref =  fbase.syncState("bookstore/books", {
      context: this,
      state: 'books'
    });
  }


  componentWillUnmount() {
    fbase.removeBinding(this.ref)
  }

  render() {
    const checkboxColor = {
      color: "white"
    };

    return (
      <div className="adminpanel col-md-4">
        <form onSubmit={this.addNewBook}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nazwa ksiazki"
              id="name"
              name="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Autor"
              id="author"
              name="author"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.author}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Opis książki"
              id="description"
              name="description"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.description}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="onStock"
              className="form-check-label"
              style={checkboxColor}
            >
              Dostępność:
            </label>

            <input
              type="checkbox"
              id="onStock"
              name="onStock"
              className="form-check"
              onChange={this.handleChange}
              value={this.state.book.onStock}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Grafika"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.image}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Dodaj
          </button>
        </form>
      </div>
    );
  }
}

export default AdminPanel;
