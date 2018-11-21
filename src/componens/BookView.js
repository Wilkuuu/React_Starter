import React from 'react';



export default class BookView extends React.Component {

    render () {
        return (
            <div>
                <b>{this.props.book.name}</b> <br/>
                <i>{this.props.book.author}</i><br/>
                <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/>
                <button onClick={ ()=> this.props.addToOrder(this.props.book)} className="btn btn-sm btn btn-primary">Dodaj do zamówienia</button>
            </div>
        )
    }


}