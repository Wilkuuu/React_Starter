import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      bookstoreName: "Black Books",
      textAlign: "center",
      clicked: true,
      textColor: "white",
      backgroundColor: "black"
    };
  }

  handleClick = () => {
    if (this.state.clicked) {
      this.setState({
        bookstoreName: "White Books",
        textAlign: "center",
        textColor: "black",
        backgroundColor: "White"
      });
    } else {
      this.setState({
        bookstoreName: "Black Books",
        textColor: "white",
        textAlign: "center",
        backgroundColor: "black"
      });
    }

    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {

    let headerCss = {
        color : this.state.textColor,
        backgroundColor : this.state.backgroundColor,
        justifyContent : this.state.textAlign
    }

    return (
      <div className="row header" style={headerCss} onClick={this.handleClick} >       
        <h1>{this.state.bookstoreName}</h1>
        
        
        <Link to="/admin"><button className="btn btn-sm btn-info goToAdmin">Go to admin panel</button></Link>
     
      </div>
    );
  }
}

export default Header;
