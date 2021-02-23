import React from "react"
import { getAdmin } from '../api/admin';
import AddReport from "../components/AddReport"
import Login from "./Login"
// import { Router, Route } from "@reach/router"

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null,
      error: null
    }
  }
  componentDidMount() {
    const admin = getAdmin().then(res => res.data);
    this.setState({
      admin
    });
  }

  render() {
    const { admin } = this.state;

    return (
      <div id="admin">
        {admin ?
          <div>
            <AddReport />
          </div> :
          <div >
            <Login />
          </div>
        }

      </div>
    );
  }
}

export default Admin;