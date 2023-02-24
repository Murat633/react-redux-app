import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart } from '../../redux/actions/cartActions';
import { Badge, Button, Table } from 'reactstrap';
import alertify from 'alertifyjs'

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product)
        alertify.erroe(`${product.productName} Remove From Cart`)
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart && this.props.cart.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.unitsInStocks}</td>
                                <td><Badge>{product.quantity}</Badge></td>
                                <td>{product.unitPrice} TL</td>
                                <td><Button color='warning' onClick={() => this.removeFromCart(product)}>Remove</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            removeFromCart: bindActionCreators(removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)
