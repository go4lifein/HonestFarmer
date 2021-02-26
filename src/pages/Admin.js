import React from "react"
import {getAdmin} from '../api/admin';

import { Router } from "@reach/router"

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
        {
          admin ?
          <div>
            Harvest Report Form here
            {/* <Router basepath="/admin">
            </Router> */}
          </div>
          :
          // <Login />
          <div>
            Admin Login Here
          </div>

        }
        
      </div>
    );
  }
}

export default Admin;