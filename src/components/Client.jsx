import React from 'react'

const Client = ({ payment }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Client</h5>
      <hr/>
      <h6 className="mb-2 text-secondary">Name:</h6>
      <p className="card-text">{payment.customer.name}</p>
      <h6 className="mb-2 text-secondary">Email:</h6>
      <p className="card-text">{payment.customer.email}</p>
      <h6 className="mb-2 text-secondary">Phone number:</h6>
      <p className="card-text">{payment.customer.phone}</p>
    </div>
  </div>
)

export default Client