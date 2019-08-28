import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PaymentItem = ({ payment }) => {
  const date = moment(payment.created).format('MMM DD h:mm A')

  return (
    <tr>
      <td scope="row">
        <Link key={payment.id} to={{ pathname:`/${payment.id}/payments`, state: { ...payment } }}>👁</Link>
      </td>
      <td>{date}</td>
      <td>{payment.status}</td>
      <td>{payment.type}</td>
      <td>{payment.customer.name} <span className="text-secondary">{payment.customer.email}</span></td>
      <td>{`$${payment.amount}`}</td>
    </tr>
  )
}

export default PaymentItem