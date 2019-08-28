import React from 'react'
import PaymentStatus from '../components/PaymentStatus'
import Client from '../components/Client'

const Data = ({ payment }) => (
  <div class="row">
    <div class="col-md-6 col-sm-12 mb-3">
      <PaymentStatus payment={payment} />
    </div>
    <div class="col-md-3 col-sm-12 mb-3">
      <Client payment={payment} />
    </div>
    <div class="col-md-3 col-sm-12 mb-3">
      {/*PaymentMethod*/}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Payment method</h5>
          <hr/>
          <div className="mb-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h6>{payment.nested_charges[0].payment_method.bank}</h6>
            <div>
              {payment.nested_charges[0].payment_method.brand}<br />
              {payment.nested_charges[0].payment_method.type}
            </div>
          </div>
          <div className="text-white pt-4" style={{ backgroundColor: '#211d45', margin: '0 -1.25rem -1.25rem' }}>
            <h6 className="text-center">{`**** **** **** **** ${payment.nested_charges[0].payment_method.last4}`}</h6>
            <p className="text-center mb-3">{payment.nested_charges[0].payment_method.name}</p>
            <div className="pl-3">
              <small>Expiration Date: {payment.nested_charges[0].payment_method.exp_month} / {payment.nested_charges[0].payment_method.exp_year}</small><br />
              <small>Authorization Code: {payment.nested_charges[0].payment_method.auth_code}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Data