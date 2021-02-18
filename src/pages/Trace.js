import React from "react"
import { Router } from "@reach/router"
import Report from "../components/Report";

import report from '../DummyData/report';

function Trace() {
  return (
    <Router basepath="/trace">
      <Report path="/" report={report} />
    </Router>
  )
}
export default Trace