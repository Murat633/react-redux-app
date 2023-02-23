import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCategory, getCategories } from '../../redux/actions/categoryActions'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { getProducts } from '../../redux/actions/productActions'


class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()
    }

    selectCategory(category) {
        this.props.actions.changeCategory(category)
        this.props.actions.getProducts(category.id)
    }

    render() {
        return (
            <div>
                <Badge color='warning'>Categories</Badge>
                <ListGroup>
                    {this.props.categories.map((category) => (
                        <ListGroupItem active={category.id === this.props.currentCategory.id} onClick={() => this.selectCategory(category)} key={category.id}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}

                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

const mapDisapatchToProps = (dispatch) => {
    return {
        actions: {
            getCategories: bindActionCreators(getCategories, dispatch),
            changeCategory: bindActionCreators(changeCategory, dispatch),
            getProducts: bindActionCreators(getProducts, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDisapatchToProps)(CategoryList)