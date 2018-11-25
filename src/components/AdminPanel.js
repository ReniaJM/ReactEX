import React from 'react'
import {fbase, firebaseApp} from '../firebase'
// bedzie on słuzył do synchroniacji stanu miedzy obiektem a baza danych
import { connect } from 'react-redux'


class Admin extends React.Component{

    constructor() {
        super();
        this.state = {
            books:[],
            book: {
                name: '',
                author: '',
                description: '',
                onStock: true,
                image: '',
            },
            loggedIn: false,
            email:'',
            password:''
        };
        // this.changename=  this.changename.bind(this)
        // tu musimy zbajdowac dopisac stały kontekst do changename
    };

    handleLoginChange =(event) => {
        this.setState({
       [event.target.name]: event.target.value
     })

}
    handleChange = (event) => {
        let newBook;
        if(event.target.name ==="onStock") {
            newBook = {
                ...this.props.book,
                // nowa ksiażka kopiuje wszytkie wartosci parametrow starej ksiazki, to jest aktualizacja stanu
                [event.target.name]: event.target.checked
            }
        }else{
             newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }

        this.props.updateBook(newBook)
    };

    addNewBook = (event) => {
        event.preventDefault();
        let newBook = {...this.state.book};
        // this.props.addBook(newBook)
        this.setState ({
            books:[this.state.books, newBook],
            book: {
                name: '',
                author: '',
                description: '',
                onStock: true,
                image: ''
            }

        });
    };

    componentDidMount(){

        if(localStorage.getItem("loggedIn")){
            this.setState({loggedIn: localStorage.getItem("loggedIn")})
        }
        this.ref= fbase.syncState('bookstore/books',{
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount (){
        fbase.removeBinding( this.ref);
    }

    authenticate = (event)=>{
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{
            // jezeli sie powiedzie
           this.props.changeLoggedIn(true);
           localStorage.setItem("loggedIn", true)
        })
            .catch(()=>{
                // jezeli sie nie powiedzie
                console.log("Unable authentication")
            })

    }

    render(){

        let adminCss = {
            padding: '10px',
        }
        return (
            <div>
                {!this.state.loggedIn &&
                <form onSubmit={this.authenticate}>
                    <input type="text" placeholder="email" id="email" name="email" className="form-control" onChange={this.handleLoginChange} value={this.state.email}/>
                    <input type="password" id="password" name="password" className="form-control" onChange={this.handleLoginChange} value={this.state.password}/>
                    <button type="submit" className="btn btn-primary">Loggin</button>
                </form>
                }
                {this.state.loggedIn &&
                <div className="adminPanel col-md-4" style={adminCss}>

                    <form onSubmit={this.addNewBook}>
                        <div className="form-group">
                            <input type="text" placeholder="book name" id="bookNameInput" name="name"
                                   className="form-control" onChange={this.handleChange} value={this.props.book.name}/>
                        </div>
                        <div className="form-group" style={adminCss}>
                            <input type="text" placeholder="book author" id="bookAuthorInput" name="author"
                                   className="form-control" onChange={this.handleChange}
                                   value={this.props.book.author}/>
                        </div>
                        <div className="form-group" style={adminCss}>
                        <textarea type="text" placeholder="book describtion" id="bookDescribtion" name="describtion"
                                  className="form-control" onChange={this.handleChange}
                                  value={this.props.book.description}/>
                        </div>
                        <div className="form-group" style={adminCss}>
                            <input type="checkbox" id="bookOnStock" name="onStock" className="form-check-input"
                                   onChange={this.handleChange} value={this.props.book.onStock}/>
                            <label htmlFor="bookOnStock" className="form-check-label"> On Stock</label>
                        </div>
                        <div className="form-group" style={adminCss}>
                            <input type="text" placeholder="book image" id="bookImageInput" name="image"
                                   className="form-control" onChange={this.handleChange} value={this.props.book.image}/>
                        </div>
                        <div style={adminCss}>
                            <button type="submit" className='btn btn-primary'>Dodaj</button>
                        </div>
                    </form>
                </div>

                }
           </div>)
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        updateBook: book => dispatch({type: 'UPDATE_BOOK', payload: book})
    }
}

const mapStateToProps = state =>{
    return {
        book: state.book
    }

}

const AdminPanel= connect(mapStateToProps, mapDispatchToProps)(Admin)
export default AdminPanel;