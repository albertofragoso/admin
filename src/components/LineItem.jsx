import React from 'react'

const LineItem = ({ item }) => (
  <tr>
    <td>{item.quantity}</td>
    <td>{item.name}</td>
    <td>{item.taxes}</td>
    <td>{item.shipping}</td>
    <td>{item.discount}</td>
    <td>{`$${item.unit_price}`}</td>
  </tr>
)

export default LineItem