import React, { Component } from 'react'
import  "../styles/component/harvestform.scss"

class HarvestForm extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            id : 1 , 
            productId : 1 ,  
            farmerId :  2 , 
            harvestTime :  new Date()

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
    onDateTimeChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render()
    {
        console.log(new Date());
        const{
            id,productId,farmerId,harvestTime
        } = this.state ;
        
    

        return(
            <div className = "hform">
                <form id  = "harvestform"  className = "form_harvest" onSubmit = {this.onSubmit}>
                   <div className = "row1">
                    <label for = "id" >ID</label>   
                    <input type = "text"
                     label = "id"
                     value  = {id}
                     id = "id"
                    
                     onChange = {(e) => this.setState({id:e.target.value})}
                     />
                     <label
                      className = "space"
                      for = "pid">
                          Product ID
                     </label>
                      <input 
                     
                     type = "text"
                     label = "id"
                    
                     id = "pid"
                     value  = {productId}
                     onChange = {(e) => this.setState({productId:e.target.value})}
                     />
                     </div>
                     <div className = "row2">
                    <label for = "fid">Farmer ID </label>     
                     <input type = "text"
                     label = "id"
                     id = "fid"
                     
                     value  = {farmerId}
                     onChange = {(e) => this.setState({farmerId:e.target.value})}
                     />
                    <label
                     className = "space"
                     for = "htime">
                         Harvest Time
                    </label>
                    <input
                   
                     type = "date"
                     label = "harvestTime"
                     value  = {harvestTime}

                     id = "htime"
                     name = "harvestTime"
                     onChange = {this.onDateTimeChange}
                     />
                     </div>

                     <button onClick = {this.onSubmit}>Add Report</button>
                </form>
            </div>
        );
    }
}

export default HarvestForm ;