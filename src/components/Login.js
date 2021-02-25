import React, {Component} from 'react'
import {setRequestAuthHeader} from '../helpers/utils.js'
import {loginAdmin} from '../api/admin.js'
import Header from "./Header.js"
import "../styles/component/form.scss"



class Login extends Component{
    state= {
        email: '',
        password: ''
    }


    handleSubmit = () =>{
        let {email , password} = this.state;
        loginAdmin({email , password})
        .then(res =>{
            
            let token  = res.data['x-admin-token'];
            setRequestAuthHeader(token);
            
            document.location.reload();
            document.location.replace('/Admin');
        })
        .catch(err => alert("Invalid Username or Password"));
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handlePress = (e) =>{
        if (e.key === "Enter") {
            let {email , password} = this.state;
            loginAdmin({email , password})
            .then(res =>{
                let token  = res.data['x-admin-token'];
                setRequestAuthHeader(token);
                
                document.location.reload();
                document.location.replace('/Admin');
            })
            .catch(err => alert("Invalid Username or Password")) 
          }
    }
    render(){
        let {email , password } = this.state;
        return(
           <div className = "mform">
               <Header />
               <div className = "main--form">
                <input type = "text" 
                name = "email"
                label = "email"
                value = {email}
                placeholder = "Enter Email"
                onChange = {(e) => this.setState({email:e.target.value})}
                />
                <input type = "password"
                name = "password"
                label = "password"
                value = {password}
                onChange = {this.handleChange}
                onKeyPress = {this.handlePress}
                placeholder = "Enter Password"
                onChange = {(e) => this.setState({password:e.target.value})}
                
                />
                <button onClick = {this.handleSubmit}>Submit</button>
            </div>
            
           </div>
        );
    }


}
 
export default Login;