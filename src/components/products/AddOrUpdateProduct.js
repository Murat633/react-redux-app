import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { getProducts, saveProduct } from '../../redux/actions/productActions';
import { getCategories } from '../../redux/actions/categoryActions';
import ProductDetail from './ProductDetail';



const AddOrUpdateProduct = ({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    ...props
}) => {
    const [product, setProduct] = useState()
    useEffect(() => {
        if (categories.length === 0) {
            getCategories()
        }
        setProduct({ ...props.product })
    }, [props.product]);

    const handleChange = (e) => {
        const [name, value] = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        })
        )
    }

    const handleSave = (e) => {
        e.preventDefault()
        saveProduct(product).then(() => {
            Navigate({ to: "/" })
        })
    }

    return (
        <div>
            <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} />
        </div>
    )
}

export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null
    return product
}

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.productId

    const product = productId && state.productReducer.length > 0 ? getProductById(state.productReducer, productId) : {}

    return {
        product,
        products
    }

}

const mapDispatchToProps = {
    saveProduct,
    getCategories,
    getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)
