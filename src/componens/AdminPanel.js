import React from "react";
import { fbase, firebaseApp } from "../fbase";
import BookForm from "./BookForm";
import LogInForm from "./LogInForm";

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
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
      }
    });
  };

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("status", user);
      } else {
        console.log("nieznany status");
      }
    });
    this.setState({ isLogged: localStorage.getItem("login") });
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  changeLoggedIn = () => {
    this.setState({ isLogged: !this.state.isLogged });
  };

  logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        console.log("Logout");
        this.setState({ isLogged: false });
        console.log("change status");
      });
  };

  render() {
    return (
      <div>
        {!this.state.isLogged && (
          <LogInForm changeLoggedIn={this.changeLoggedIn} />
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
