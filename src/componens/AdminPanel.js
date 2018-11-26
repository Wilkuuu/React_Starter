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
    
    if (localStorage.getItem("login") === null) {
      localStorage.setItem("login", this.state.isLogged);
    } else {
      this.setState({ isLogged: localStorage.getItem("login") });
      this.ref = fbase.syncState("bookstore/books", {
        context: this,
        state: "books"
      });
    }
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  changeLoggedIn = () => {
    console.log("In", this.state.isLogged);
    this.setState({ isLogged: !this.state.isLogged });
    console.log("Out", this.state.isLogged);
    localStorage.setItem("login", this.state.isLogged);
  };

  logout = () => {
    this.setState({ isLogged: !this.state.isLogged });
    console.log("Wyl;ogowanie ze statusem ", this.state.isLogged);
    localStorage.setItem("login", this.state.isLogged);
    firebaseApp.auth().signOut();
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
