import React, { Component } from 'react'
import "../styles/component/harvestform.scss"
import Loading from './Loading';

class HarvestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: null,
            farmerId: null,
            harvestTime: new Date().toISOString().substr(0, 16)
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
        let disabled = !(farmerId && productId && harvestTime);
        
        allFarmers = allFarmers.sort((a, b) => a.name.localeCompare(b.name));
        allProducts = allProducts.sort((a, b) => a.name.localeCompare(b.name));

        let farmer = allFarmers.find(item => item.id == farmerId);
        let product = allProducts.find(item => item.id == productId);

        return (
            <div className="hform">
                <form id="harvestform" className="form_harvest" onSubmit={this.onSubmit}>
                    <div className="center middle">
                        
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
                                                {farmer.name} - {farmer.subregion}
                                            </option>
                                        )
                                    })
                                }
                            </select>

                        </div>
                        
                        <div className="p-10">
                        {
                            farmer &&
                            <div className="flex middle">
                                <img className="avatar" src={farmer.image} alt="farmer" />
                                <div className="p-10">
                                    {farmer.name} <br />
                                    {farmer.subregion}, {farmer.region}
                                </div>
                            </div>
                        }
                        </div>
                    </div>
                    <div className="center middle">
                        
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
                        
                        <div className="p-10">
                        {
                            product &&
                            <div className="flex middle">
                                <img className="avatar" src={product.image} alt="product" />
                                <div className="p-10">
                                    {product.name} <br />
                                    {product.packSize}
                                </div>
                            </div>
                        }
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
                            value={harvestTime}
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