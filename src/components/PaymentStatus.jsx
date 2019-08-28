import React from 'react'
import moment from 'moment'

import './styles/PaymentStatus.css'

const PaymentStatus = ({ payment }) => {
  
  const date = moment(payment.nested_charges[0].created).format('MMM DD h:mm A')

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Payment status</h5>
        <hr/>
        <div className="Payment-status mb-3">
          <div>
            <h6 className="mb-2 text-secondary">Amount:</h6>
            <h3>{`$${payment.amount}.00`}</h3>
          </div>
          <div>
            <p><span className="text-secondary">Created at: </span>{date}</p>
          </div>
        </div>
        <div className="mb-3">
          <p><span className="text-danger">{payment.status}</span> {payment.nested_charges[0].failure_message}</p>
        </div>
        <h6 className="text-secondary">Order ID:</h6>
        <p>{payment.id}</p>
      </div>
    </div>
  )
}

export default PaymentStatus