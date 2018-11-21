import React from "react";

class AdminPanel extends React.Component {

  constructor() {
    super();
    this.state ={
      book :{
        name : "",
        author: "",
        description: "",
        onStock: false,
        image: ""   
      },
      books :[]
    };

  };

  handleChange = (event) => {

    let newBook;

    if(event.target.name === "onStock") {
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
  }

  addNewBook = (event) => {

    event.preventDefault();

    let newBooks = [...this.state.books];
    let newBook = {...this.state.book};

    newBooks.push(newBook);

    this.setState({
      books: newBooks    
     /* book:{
        name : "",
        author: "",
        description: "",
        onStock: false,
        image: "" */  

      });

      let resetBook = {...this.state.book}
       Object.keys(resetBook).map(key=> {
      resetBook[key] = typeof resetBook[key] ===   'boolean' ? false : '';
       });

    this.setState({
      book: resetBook
    })

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
              onChange={this.handleChange}  value={this.state.book.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Autor"
              id="author"
              name="author"
              className="form-control"
              onChange={this.handleChange}  value={this.state.book.author}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Opis książki"
              id="description"
              name="description"
              className="form-control"
              onChange={this.handleChange}  value={this.state.book.description}
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
              onChange={this.handleChange}  value={this.state.book.onStock}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Grafika"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}  value={this.state.book.image}
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
