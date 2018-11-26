import React from 'react';
import AdminBookView from './AdminBookView';

export default class AdminBookList extends React.Component {

    
        

    render() {

        let list;

        if(this.props.books) {
            list = this.props.books.map((book)=> <AdminBookView book={book} delete={this.props.delete} />)
            
        }
        else {
            list=<p>Brak książek</p>
        }
        return (

            
            <div>
                
                <div>{list}</div>                     
                
                </div>
        )}
}