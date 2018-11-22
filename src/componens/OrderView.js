import React from 'react';



export default class OrderView extends React.Component {

    render () {
        return (
            <div className="orderView">
                <span><b>{this.props.book.name}</b></span> <br/>                
                <button onClick={ ()=> this.props.removeFromOrder(this.props.book.name)} className="btn btn-sm btn btn-warning">Usuń z zamówienia</button>
            </div>
        )
    }


}