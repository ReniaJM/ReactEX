import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../index.css'


class App extends React.Component {
    constructor(){
        super()
        this.state=  {
            order: []
        }
    }

    addToOrder = (book) =>{
        this.setState ({
            order: [...this.state.order, book]
            // to kopiuje wszystkei elemnety ze stanu komponentu i wrzuci do nowej tablicy i dalej dodaj book, czyli kopia tablicy i dodatkowy element book
        })

    }

    removeOrder = (title) =>{
        this.setState ({
            order: this.state.order.filter(book => title!==book.name)
        });

    }

    // addNewBook= (book) =>{
    //     let newBooks = [...this.state.books];
    //
    //     newBooks.push(book);
    //
    //     this.setState ({
    //         books : newBooks
    //     });
    // };


    render(){
        return (
       <div className ="app">
            <Header/>
           <div className = "row">
                <Order order = {this.state.order} removeOrder={this.removeOrder} />
                <Inventory books ={this.state.books} addToOrder = {this.addToOrder}/>
           </div>
        </div>
        )
    }
}

/*tutaj przekazujmy props this state*/
export default App;