import React from "react"
import { getAdmin } from '../api/admin';
import AddReport from "../components/AddReport"
import Login from "../components/Login"
import Loading from "../components/Loading"

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null,
      error: null,
      loading: true
    }
  }
  componentDidMount() {
    getAdmin()
    .then(res => {
      this.setState({
        admin: res.data,
        loading: false
      });
    })
    .catch(err => this.setState({err: err, loading: false}));
  } 
  
  render() {
    const { admin, loading } = this.state;
    console.log("Hello");
    
    return (
      <>
        {
          loading ?
          <Loading /> :
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
        }
      </>
    );
  }
}

export default Admin;