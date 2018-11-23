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
      isLogged: false
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
      },
     
    });
  };

  componentDidMount() {
    if (localStorage.getItem("login")) {
      this.setState({ isLogged: localStorage.getItem("login") });
      console.log(this.state);
    }

    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  changeLoggedIn = () => {
    this.setState({ isLogged: !this.isLogged });
    localStorage.setItem("login", this.isLogged);
  };

  logout = () =>  {    
    firebaseApp.auth().signOut();
    this.setState({ isLogged: !this.isLogged });
  }

    
  

  render() {
    return (
      <div>
        {this.state.isLogged && (
          <LogInForm
            changeLoggedIn={this.changeLoggedIn}
            isLogged={this.state.isLogged}
          />
        )}
        {!this.state.isLogged && (
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
