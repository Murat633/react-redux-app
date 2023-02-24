import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, List, ListGroup, ListGroupItem, Table } from 'reactstrap'
import { Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { getProducts } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()
    }

    addToCart(product) {
        this.props.actions.addToCart({ ...product, quantity: 1 })
        alertify.success(`${product.productName} Sepete Eklendi`)
    }

    render() {
        return (
            <div>
                <h3><Badge color='warning'>Products</Badge> <Badge color='success'>{this.props.currentCategory.categoryName}</Badge></h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products && this.props.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.unitsInStocks}</td>
                                <td>{product.unitPrice} TL</td>
                                <td><Button color='warning' onClick={() => this.addToCart(product)}>Add Cart</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            getProducts: bindActionCreators(getProducts, dispatch),
            addToCart: bindActionCreators(addToCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)