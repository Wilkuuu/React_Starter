import React from "react";

export default class LogInForm extends React.Component {
  

    constructor() {
    super() ;

        this.state = {

        };
    }


    render() {
    return (
      <React.Fragmen>
        <div className="col-4" />
        <div className="col-4">
          <div className="card">
            <div className="card-body ">
              <form onSubmit={this.props.autenticate}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Login"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={this.props.handleLoginChange}
                    value={this.props.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Hasło"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={this.props.handleLoginChange}
                    value={this.props.password}
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
      </React.Fragmen>
    );
  }
}
