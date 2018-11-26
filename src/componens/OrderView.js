import React from 'react';



export default class OrderView extends React.Component {

    
    render () {
       
        return (
            
            <div className="orderedView row">
                <div className="col-md-8">
                <span>{this.props.book.name} {this.props.book.price}</span>  
                </div>               
                <button onClick={ ()=> this.props.removeFromOrder(this.props.book.name)} className="btn btn-sm btn btn-warning">Usuń z zamówienia</button>
            </div>
        )
    }


}