import React from 'react'
import {Link} from "react-router-dom"

// jest to komponent reaktowy  na ktory mozemy przekierowac na inny komoponent


class Header extends React.Component{

    constructor() {
        super()
        // ponieważ tutaj jest dziedziczenie po classie React.Component
        this.state = {
            bookstoreName: 'black books',
            clicked: true,
            textColor: 'white',
            backgroundColor: 'black'
        }
    }

    handleClick = () =>{

        if(this.state.clicked){
            this.setState({
                bookstoreName: 'white books',
                textColor: 'white',
                backgroundColor: 'black'
            })
        }else {
            this.setState({
                bookstoreName: 'black books',
                textColor: 'black',
                backgroundColor: 'white'
            })

        }
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){

        let renderCSS = {
            color: this.state.textColor,
            backgroundColor: this.state.backgroundColor
        }
        return <div className="row header" style = {renderCSS} onClick={this.handleClick}>
            <h1>{this.state.bookstoreName}</h1>
            <Link to = "/admin"><button className="btn btn-info"> Administrator Panel </button></Link>
        </div>;
    }
}

export default Header;