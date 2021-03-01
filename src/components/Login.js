import React, { Component } from 'react'
import { setRequestAuthHeader } from '../helpers/utils.js'
import { loginAdmin } from '../api/admin.js'
import Header from "./Header.js"
import "../styles/component/form.scss"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { email, password } = this.state;
        loginAdmin({ email, password })
            .then(res => {

                let token = res.data['x-admin-token'];
                setRequestAuthHeader(token);

                document.location.reload();
            })
            .catch(err => alert("Invalid Username or Password"));
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        let { email, password } = this.state;
        return (
            <div className="mform">
                <Header />
                <form onSubmit={this.handleSubmit} >
                    <div className="main--form">
                        <input type="text"
                            name="email"
                            label="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={this.handleChange}
                            required
                        />
                        <input type="password"
                            name="password"
                            label="password"
                            value={password}
                            onChange={this.handleChange}
                            onKeyPress={this.handlePress}
                            placeholder="Enter Password"
                            onChange={this.handleChange}
                            required

                        />
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        );
    }


}

export default Login;