import React from 'react'
import moment from 'moment'

const PaymentItem = ({ payment }) => {
  const date = moment(payment.created).format('MMM DD h:mm A')

  return (
    <tr>
      <th scope="row">👁</th>
      <td>{date}</td>
      <td>{payment.status}</td>
      <td>{payment.type}</td>
      <td>{payment.customer.name} <span className="text-secondary">{payment.customer.email}</span></td>
      <td>{`$${payment.amount}`}</td>
    </tr>
  )
}

export default PaymentItem