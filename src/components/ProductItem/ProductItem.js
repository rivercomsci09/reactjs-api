import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>R01</td>
                <td>Iphone 8</td>
                <td>500</td>
                <td>
                    <span className="label label-success">Active</span>
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