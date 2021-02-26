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
      loading:true
    }
  }
  async componentDidMount() {
    const admin = await getAdmin()
    .then(res => res.data)
    .catch(err => this.setState({loading: false}));

    this.setState({
      admin,
      loading:false
    });
  }

  render() {
    const { admin, loading } = this.state;

    if(loading) {
      return <Loading />
    }
  
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