import React from 'react'
import OrderView from './OrderView'


class Order extends React.Component{
    render(){
        const orderedbooks = this.props.order.map(order =>{
            return <OrderView book = {order} removeOrder={ this.props.removeOrder}/>
        })
        let adminCss = {
            paddingTop: '15px',
        }
        return (
            <div className = "order col-md-6" style={adminCss}>
                <h2>Your order:</h2>
                {orderedbooks}
            </div>
        )
    }
}

export default Order;