import React from 'react'
import {fbase} from '../firebase'
import BookView from './BookView'



export default class Inventory extends React.Component{

    constructor(){
        super()
        this.state= {
            books: []
        }
    }
    componentDidMount(){
        this.ref= fbase.syncState('bookstore/books',{
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount (){
        fbase.removeBinding( this.ref);
    }


    render(){
        let adminCss = {
            paddingTop: '15px',
        }

        const bookListing = this.state.books.map(book  =>{
             return <BookView key={book.name} book={book} addToOrder = {this.props.addToOrder}/>
        });
        return (
            <div className=" inventory col-md-6" style={adminCss}>
                <h2>Bookstore inventory:</h2>
                {bookListing}
            </div>
        );
    }
}

