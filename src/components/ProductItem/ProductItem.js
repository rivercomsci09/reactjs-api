import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Active' : 'Not';
        var statusClass = product.status ? 'warning' : 'success';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>RV{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-primary mr-10">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;