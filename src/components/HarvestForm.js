import React, { Component } from 'react'
import "../styles/component/harvestform.scss"
import Loading from './Loading';

class HarvestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            farmerId: null,
            harvestTime: null

        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {}

        for (var pair of formData.entries()) {
            data[pair[0]] = pair[1];
        }
        const { onSubmit } = this.props;
        onSubmit(data);

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {


        let { loading = true, allFarmers, allProducts } = this.props;
        if (!(allFarmers && allProducts)) {
            loading = true;
        }
        if (loading) {
            return <Loading />
        }

        const {
            productId, farmerId, harvestTime
        } = this.state;
        console.log(farmerId, productId, harvestTime)
        let disabled = !(farmerId && productId && harvestTime);

        let farmer = allFarmers.find(item => item.id == farmerId);
        let product = allProducts.find(item => item.id == productId);
        console.log(farmer, product);

        return (
            <div className="hform">
                <form id="harvestform" className="form_harvest" onSubmit={this.onSubmit}>
                    <div className="flex center middle">
                        
                        {/* {
                            farmer &&
                            <div className="p-10">
                                <img className="avatar" src={farmer.image} alt="farmer" />
                            </div>
                        } */}
                        <div
                            className="row1"
                            style={{
                                width: '100%'
                            }}
                        >
                            <label
                                className="space"
                                htmlFor="fid"
                            >
                                Farmer
                            </label>
                            <select
                                label="id"
                                id="fid"
                                name="farmerId"
                                required
                                placeholder="Select Farmer"
                                onChange={this.onChange}
                            >
                                <option></option>
                                {
                                    allFarmers.map(farmer => {
                                        return (
                                            <option
                                                key={farmer.id.toString()}
                                                value={farmer.id}
                                            >
                                                {farmer.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                        </div>
                    </div>
                    <div className="flex center middle">
                        {/* {
                            product &&
                            <div className="p-10">
                                <img className="avatar" src={product.image} alt="product" />
                            </div>
                        } */}
                        <div
                            className="row2"

                            style={{
                                width: '100%'
                            }}
                        >
                            <label
                                className="space"
                                htmlFor="fid"
                            >
                                Product
                            </label>
                            <select
                                label="id"
                                id="fid"
                                name="productId"
                                placeholder="Select Product"
                                required
                                onChange={this.onChange}
                            >
                                <option></option>
                                {
                                    allProducts.map(product => {
                                        return (
                                            <option
                                                key={product.id.toString()}
                                                value={product.id}
                                            >
                                                {product.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row2">
                        <label
                            className="space"
                            htmlFor="htime"
                        >
                            Harvest Time
                        </label>
                        <input
                            type="datetime-local"
                            // value={harvestTime}
                            id="htime"
                            name="harvestTime"
                            required
                            onChange={this.onChange}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={disabled}
                    >Add Report</button>
                </form>
            </div>
        );
    }
}

export default HarvestForm;