import React, { useState } from 'react'
import Data from '../components/Data'
import Breakdown from '../components/Breakdown'

import './styles/PaymentDetail.css'

const PaymentDetail = props => {

  const payment = props.location.state

  const [data, setData] = useState(true)

  const handleClick = () => setData(!data)

  return(
    <div className="PaymentDetail container-fluid mb-5">
      <h1 className="mt-4">Payment Details</h1>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <span onClick={handleClick} className={data ? `nav-link active disabled` : 'nav-link'}>Data</span>
        </li>
        <li className="nav-item">
          <span onClick={handleClick} className={!data ? `nav-link active disabled` : 'nav-link'}>Breakdown</span>
        </li>
      </ul>
      {data
       ? <Data payment={payment} />
       : <Breakdown payment={payment} />
      }
    </div>
  )
}

export default PaymentDetail