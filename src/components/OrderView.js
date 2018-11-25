import React from 'react'


export default class OrderView extends React.Component {

    render (){

        return (
            <div className="orderView row">
                <div className=" col-md-4">
                    <span>{this.props.book.name}</span>
                </div>
                <div className=" col-md-4">
                    <button onClick={(event) => this.props.removeOrder(this.props.book.name)}>remove order</button>
                </div>
            </div>
        );

    }
}
