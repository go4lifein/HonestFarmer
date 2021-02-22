import React from "react"
import {getAdmin} from '../api/admin';
import AddReport from "./AddReport"
import Login from "./Login"
import { Router, Route } from "@reach/router"

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null
    }
  }
  componentDidMount() {
    getAdmin()
    .then(res => {
      this.setState({
        admin: res.data
      });
    })
    .catch(err => {
      // remove cookie
    })
  }
  
  render() {
    const {admin} = this.state;

    return(
      <div id="admin">
        {admin ?
        <div>
          <AddReport />
          </div>  :
          <div >
            <Login />
            </div>
      }
        
      </div>
    );
  }
}

export default Admin;