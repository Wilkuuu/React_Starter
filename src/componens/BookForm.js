import React from 'react';


export default class BookForm extends React.Component {
constructor() {
    super();
    this.state ={
        
    }
    
    
}


    render() {
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
                  value={this.props.book.name}
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
                  value={this.props.book.author}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Opis książki"
                  id="description"
                  name="description"
                  className="form-control"
                  onChange={this.props.handleChange}
                  value={this.props.book.description}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="onStock"
                  className="form-check-label"
                >
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
                Dodaj
              </button>
            </form>
            <button className="btn btn-sm btn-danger" onClick={this.props.logout}>Wyloguj</button>
          </div>
            </React.Fragment>
        )
    }
}