import React, { Component } from 'react';
import callAPI from './../../utils/apicaller';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var {txtName, txtPrice, chkbStatus} = this.state;
        var {history} = this.props;
        callAPI('products','POST', {
            name : txtName,
            price : txtPrice,
            status : chkbStatus
        }).then(res => {
            //history.push("/");
            history.goBack();
        });
    }
    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} />
                            Active
                       </label>
                    </div>
                    <button type="submit" className="btn btn-primary mr-10">Save</button>
                    <Link to = "/product-list" className="btn btn-default " >Don't Save</Link>
                </form>
            </div>
        );
    }
}



export default ProductActionPage;