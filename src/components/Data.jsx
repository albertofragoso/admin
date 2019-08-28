import React from 'react'
import PaymentStatus from '../components/PaymentStatus'
import Client from '../components/Client'
import PaymentMethod from '../components/PaymentMethod'

const Data = ({ payment }) => (
  <div className="row">
    <div className="col-md-6 col-sm-12 mb-3">
      <PaymentStatus payment={payment} />
    </div>
    <div className="col-md-3 col-sm-12 mb-3">
      <Client payment={payment} />
    </div>
    <div className="col-md-3 col-sm-12 mb-3">
     <PaymentMethod payment={payment} />
    </div>  
  </div>
)

export default Data