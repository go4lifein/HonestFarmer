import React, { Component } from 'react'



class HarvestForm extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            id : 1 , 
            productId : 1 ,  
            farmerId :  2 , 
            harvestTime :  new Date().toISOString  

        }
    }

    onSubmit  = (e) =>
    {
        e.preventDefault();
        const data = new FormData(e.target);
        const {onSubmit} = this.props;
        onSubmit(data);

    }
    onChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onCalenderChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render()
    {
        const{
            id,productId,farmerId,harvestTime
        } = this.state ;
       
        console.log(this.state);

        return(
            <div className = "hform">
                <form id  = "harvestform" onSubmit = {this.onSubmit}>
                    <input type = "text"
                     label = "id"
                     value  = {id}
                     onChange = {(e) => this.setState({id:e.target.value})}
                     />
                      <input type = "text"
                     label = "id"
                     value  = {productId}
                     onChange = {(e) => this.setState({productId:e.target.value})}
                     />
                      <input type = "text"
                     label = "id"
                     value  = {farmerId}
                     onChange = {(e) => this.setState({farmerId:e.target.value})}
                     />
                      <input type = "date"
                     label = "harvestTime"
                     value  = {harvestTime}
                     onCalenderChange = {(e) => this.setState({harvestTime:e.target.value})}
                     />

                     <button onCLick = {this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default HarvestForm ;