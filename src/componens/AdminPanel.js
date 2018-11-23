import React from "react";
import { fbase, firebaseApp } from "../fbase";
import BookForm from "./BookForm";
import LogInForm from "./LogInForm";

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
      },
      password: "",
      email: "",
      isLogged: false
    };
  }

  handleLoginChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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

  addNewBook = event => {
    event.preventDefault();
    let newBook = { ...this.state.book };

    if (Array.isArray(this.state.books)) {
      this.setState({ books: [...this.state.books, newBook] });
    } else {
      this.setState({ books: [newBook] });
    }

    this.setState({
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      },
      isLogged: false,
      email: "",
      password: ""
    });
  };

  componentDidMount() {
    if (localStorage.getItem("login")) {
      this.setState({ isLogged: localStorage.getItem("login") });
    }

    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  autenticate = event => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signInAndRetrieveDataWithEmailAndPassword(
        this.state.email,
        this.state.password
      )
      .then(() => {
        this.setState({ isLogged: true });
        localStorage.setItem("login", true);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  logout() {
    localStorage.setItem("login", false);
    console.log("Logout works");
  }

  render() {
    return (
      <div>
        {!this.state.isLogged && (
          <LogInForm
            handleChange={this.handleLoginChange}
            autenticate={this.autenticate}
            password={this.state.password}
            email={this.state.email}
          />
        )}
        {this.state.isLogged && (
          <BookForm
            logout={this.logout}
            addNewBook={this.addNewBook}
            book={this.state.book}
            handleChange={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default AdminPanel;
