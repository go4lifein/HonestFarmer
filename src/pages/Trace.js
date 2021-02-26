import React, {useEffect, useState} from "react"
import { Router } from "@reach/router"
import Report from "../components/Report";
import Loading from '../components/Loading'
import {getHarvestReport} from '../api/user';

// import report from '../DummyData/report';

function Trace() {
  
  const [loading, setLoading] = useState(true);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      // code that references a browser global
      
      const search = new URLSearchParams(window.location.search);
      const reportId = search.get('report')
      // console.log(window.location.search, reportId)

      getHarvestReport(reportId)
      .then(res => {
        setReport(res.data)
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => setLoading(false))
    }
  }, []);

  if(loading) {
    return (<Loading />)
  }

  return (
    <div>
      {
        error && 
        <div className="flex center p-10">
          Something isn't right. :(
        </div>
      }
      {
        (!error && report) &&
        <Router basepath="/trace">
          <Report path="/" report={report} />
        </Router> 
      }
    </div>
  )
}
export default Trace