import React, { Component } from 'react'
import {
    Badge,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from 'reactstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import alertify from 'alertifyjs'

import { removeFromCart } from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom'

class CartSummary extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product)
        alertify.error(`${product.productName} Delete From Cart`)
    }
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Cart
                    </DropdownToggle>
                    < DropdownMenu end>
                        {
                            this.props.cart.length > 0 ? this.props.cart.map((product, i) => i < 10 && (
                                <DropdownItem key={i}><Badge color='success'>{product.quantity}</Badge> {product.productName} <Badge onClick={() => this.removeFromCart(product)} color='danger'>X</Badge></DropdownItem>
                            )) : <DropdownItem>"Empty Cart"</DropdownItem>
                        }
                        <DropdownItem divider />
                        <DropdownItem><Link style={{ textDecoration: "none" }} to="/cart">Go to Cart</Link></DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)