import React from 'react'

import './styles/PaymentMethod.css'

const PaymentMethod = ({ payment }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Payment method</h5>
      <hr/>
      <div className=" Payment-method-brand mb-2">
        <h6>{payment.nested_charges[0].payment_method.bank}</h6>
        <div>
          {payment.nested_charges[0].payment_method.brand}<br />
          {payment.nested_charges[0].payment_method.type}
        </div>
      </div>
      <div className="Payment-method text-white pt-4">
        <h6 className="text-center">{`**** **** **** **** ${payment.nested_charges[0].payment_method.last4}`}</h6>
        <p className="text-center mb-3">{payment.nested_charges[0].payment_method.name}</p>
        <div className="pl-3">
          <small>Expiration Date: {payment.nested_charges[0].payment_method.exp_month} / {payment.nested_charges[0].payment_method.exp_year}</small><br />
          <small>Authorization Code: {payment.nested_charges[0].payment_method.auth_code}</small>
        </div>
      </div>
    </div>
  </div>
)

export default PaymentMethod