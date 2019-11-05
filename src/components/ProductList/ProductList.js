import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">List Products</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductItem></ProductItem>
                            <ProductItem></ProductItem>
                            <ProductItem></ProductItem>
                            <ProductItem></ProductItem>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ProductList;