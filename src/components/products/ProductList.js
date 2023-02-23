import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, List, ListGroup, ListGroupItem, Table } from 'reactstrap'
import { Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { getProducts } from '../../redux/actions/productActions'

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()
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
                                <td><Button>Add Cart</Button></td>
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
            getProducts: bindActionCreators(getProducts, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)