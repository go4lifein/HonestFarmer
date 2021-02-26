
import React ,{ Component } from 'react'
import "../styles/component/form.scss"

class Form extends Component{
constructor(props){
    super();
    this.state = {
       products: [
            {
                "id": 1,
                "name": "Amla",
               
            },
            {
                "id": 2,
                "name": "Anaar/Pomegranate",
              
            },
            {
                "id": 3,
                "name": "Green Peas / Matar",
               
            },
            {
                "id": 4,
                "name": "Kathal - Diced",
               
            },
            {
                "id": 5,
                name: "Pineapple (1 - 1.5 Kg)",
                
            }
        ]
    }
}
stateChange(e) {
  this.setState({prodcuts: e.target.products});
}

render()

{
    console.log(this.state.products);
    return(
        <div className = "form">
            <form className = "innercontent">

            <select name="Products" id= "products" >
            <option value  = {this.state.products.name} onChange = {this.stateChange}  >{this.state.products.name}</option>
            </select>
            </form>
        </div>
    );
}

}

export default Form ;
