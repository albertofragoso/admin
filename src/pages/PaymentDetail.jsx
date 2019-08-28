import React from 'react'
import Data from '../components/Data'

const PaymentDetail = props => {

  const payment = props.location.state

  return(
    <div className="container-fluid">
      <h1 className="mt-4">Payment Details</h1>

      {/* <Data payment={payment} /> */}

      {/*Breakdown*/}

    </div>

  )
}

export default PaymentDetail