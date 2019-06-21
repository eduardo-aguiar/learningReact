
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProducts from '../middleware/fetchProducts';
import { getProductsError, getProducts, getProductsPending } from '../reducers/api-redux';

import Spinner from 'react-bootstrap/Spinner';


class ProductView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
       
        const {fetchProducts} = this.props;
       this.fetchProducts();
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (!pending) return false;
        // more tests
        return true;
    }

    render() {
        const { products, error } = this.props;

       if (this.shouldComponentRender()) return spinner();
        
        console.log( this.shouldComponentRender())
        return (
            <div>
            <h1>Products</h1>
           

            </div>
        );
       
        
    }
}

const spinner = () => {
    return(
    <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>

    )
    
}
const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchProducts
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView);
