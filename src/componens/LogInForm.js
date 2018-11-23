import React from "react";
import {firebaseApp  } from "../fbase";

export default class LogInForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      email: "",
    };
  }

  autenticate = event => {
    
    event.preventDefault();
     firebaseApp.auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password
      )   
      .then(() => {
       this.props.changeLoggedIn(true)
      })
      .catch(() => {
        console.log("Error");
      });
  };

  handleLoginChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-4" />
        <div className="col-4">
          <div className="card">
            <div className="card-body ">
              <form onSubmit={this.autenticate}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Login"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={this.handleLoginChange}
                    value={this.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Hasło"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={this.handleLoginChange}
                    value={this.password}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">
                  Zaloguj się{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4" />
      </React.Fragment>
    );
  }
}
