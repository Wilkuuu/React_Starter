import React from "react";
import { fbase , firebaseApp} from "../fbase";
import {firebase} from 'firebase';



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

  handleLoginChange = (event) => {
    this.setState({[event.target.name]: event.target.value 
    })
  }

  handleChange = (event) => {
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
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  autenticate = (event) => {
    event.preventDefault();
     firebaseApp.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email,this.state.password)
      .then( () =>{
        this.setState({isLogged: true})
      })
      .catch( () =>{
        console.log('Error')
      })
  }

  render() {
    const checkboxColor = {
      color: "white"
    };

    return (
      <div>
        {!this.state.isLogged &&
        <form onSubmit={this.autenticate}>
          <div className="form-group">
         
          <input type="text"
                  placeholder="Login"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={this.handleLoginChange}
                  value={this.state.book.email}/>
          </div>
          <div className="form-group">
          
          <input  type="text"
                  placeholder="Hasło"
                  id="password"
                  name="password"
                  className="form-control"
                  onChange={this.handleLoginChange}
                  value={this.state.book.password}/>
          </div>  
          <button type="submit" className="btn btn-primary btn-sm" >Zaloguj się </button>
        </form>  
      }


        {this.state.isLogged && 
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
        }
      </div>
    );
  }
}

export default AdminPanel;
