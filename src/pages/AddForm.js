import React , { Component} from 'react'
import {addHarvestReport} from "../api/admin"
import HarvestForm from "../components/HarvestForm"
import Header from "../components/Header.js"

class AddForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = { 
            report:null,
            loading:false
        }
    }

    onSubmit = (data) =>{
        this.setState({
            loading:true
        })
        addHarvestReport(data)
        .then(res =>{
            console.log(res);
            this.setState({
                loading:false
            })
            alert('Done');
        })
        .catch(err =>{
            if(err.response && err.repsonse.status === 400){
                alert(err.response.data)
            }
            console.log(err);
            this.setState({
                loading:false
            })
        })
    }

    render()
    {
        const{loading , report} = this.state;
        if(report)
        {

        }
        return(
            <div>
                <Header />
                <div className = "harvest-section"
                style = {{display:"flex" , 
                flexDirection : "column",
                justifyContent : "center",
                alignItems : "center",
                paddingTop : "20vh"
              }}>
                    <h1>Add Harvest Report </h1>
                    <HarvestForm onSubmit = {this.onSubmit} loading = {loading} />
                         
                </div>
                
            </div>
        );
    }
}

export default AddForm;
