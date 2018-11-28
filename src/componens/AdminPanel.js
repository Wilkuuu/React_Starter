import React from "react";
import { fbase, firebaseApp } from "../fbase";
import BookForm from "./BookForm";
import LogInForm from "./LogInForm";
import AdminBookList from "./AdminBookList";

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: localStorage.getItem("isLogged"),
      editMode: false,
      bookToEdit: {},
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

  addNewBook = book => {
    console.log('w Add w admin Panelu', book)
    
    this.setState({
      books: [...this.state.books, book],
      editMode: false,
      bookToEdit: {}
    });
  };

  delete = title => {
    this.setState({
      books: this.state.books.filter(book => title !== book.name)
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

    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  editBook = bookToEdit => {
    this.setState({ editMode: true, bookToEdit: bookToEdit });

    // if (event.target.name === "onStock") {
    //   this.editBook = {
    //     ...this.state.editBook,
    //     [event.target.name]: event.target.checked
    //   };
    // } else {
    //   this.editBook = {
    //     ...this.state.editBook,
    //     [event.target.name]: event.target.value
    //   };
    // }
    // this.setState({
    //   book: this.editBook
    // });
  };

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  changeLoggedIn = () => {
    this.setState({ isLogged: !this.state.isLogged });
    localStorage.setItem("isLogged", this.state.isLogged);
  };

  logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        console.log("Logout");

        this.changeLoggedIn();
        console.log("change status", this.state.isLogged);
      });
  };

  render() {
    return (
      <div>
        {!this.state.isLogged && (
          <LogInForm changeLoggedIn={this.changeLoggedIn} />
        )}
        {this.state.isLogged && (
          <React.Fragment>
            <BookForm
              logout={this.logout}
              addNewBook={this.addNewBook}
              handleChange={this.handleChange}
              editMode={this.state.editMode}
              book={this.state.bookToEdit}
            />
            <AdminBookList
              delete={this.delete}
              books={this.state.books}
              editBook={this.editBook}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default AdminPanel;
