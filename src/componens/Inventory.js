import React from 'react';
import BookView from './BookView';

class Inventory extends React.Component {
    render() {
       
        const bookList= this.props.books.map(book => {
            return <BookView book={book} addToOrder={this.props.addToOrder}/>
        });

        return (
        <div className="inventory col-md-4">
                {bookList}
        </div>
            );
    }

    


}

export default Inventory ;