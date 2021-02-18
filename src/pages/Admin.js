import React from "react"
import {getAdmin} from '../api/admin';

import { Router } from "@reach/router"

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    getAdmin()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  render() {
    return(
      <div id="admin">
        Hellow there
        <Router basepath="/admin">
        </Router>
      </div>
    );
  }
}

export default Admin;