import React, { Component } from 'react'
import {Link} from 'gatsby'

import { addHarvestReport, getAllProducts, getAllFarmers } from "../api/admin"
import Logo from "../assets/svgs/logo.svg"
import HarvestForm from "./HarvestForm"
import Loading from './Loading';

import "../styles/component/harvestform.scss"

class AddReport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            report: null,
            loading: true
        }
    }

    componentDidMount = async () => {
        const allFarmers = await getAllFarmers().then(res => res.data);
        const allProducts = await getAllProducts().then(res => res.data);

        this.setState({
            allFarmers,
            allProducts,
            loading: false
        })
    }

    onSubmit = (data) => {
        this.setState({
            loading: true
        })
        addHarvestReport({report: data})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            if (err.response && err.repsonse.status === 400) {
                alert(err.response.data)
            }
        })
        .finally(() => this.setState({loading: false}))
    }

    render() {
        const { loading, report, allFarmers, allProducts } = this.state;

        if (loading) {
            return <Loading />
        }

        return (
            <div>
                <div className="absolute" style={{top: 10, left: 10}}>
                    <Link to ="/" >
                        <Logo style={{width: 100}} />
                    </Link>
                </div>
                <div 
                    className="harvest-section"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "15vh",
                        width: "100%",
                        fontFamily: "CircularStd"
                    }}
                >
                    <h1 className="harvest1">
                        Add Harvest Report
                    </h1>
                    <HarvestForm 
                        allFarmers={allFarmers}
                        allProducts={allProducts}
                        loading={loading}
                        onSubmit={this.onSubmit} 
                    />

                </div>

            </div>
        );
    }
}

export default AddReport;
