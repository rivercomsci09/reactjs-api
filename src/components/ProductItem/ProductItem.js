import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm("Delete Product?")) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

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
                    <Link to={`/product/edit/${product.id}`} className="btn btn-primary mr-10">Edit</Link>
                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductItem;