import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap'
import { bindActionCreators } from 'redux'
import { removeFromCart } from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import CartSummary from '../cart/CartSummary'
import { Link } from 'react-router-dom'
class Navi extends Component {
    state = { isOpen: false }



    render() {
        return (
            <Navbar>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Nav className="me-auto">
                    <Link style={{ textDecoration: "none", margin: "auto", marginRight: "5px" }} to="/">Home</Link>
                    <CartSummary />
                </Nav>
            </Navbar >
        )
    }
}

export default Navi