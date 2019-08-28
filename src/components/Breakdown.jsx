import React from 'react'
import LineItem from './LineItem'

const Breakdown = ({ payment }) => (
  <table className="table table-hover table-responsive">
    <thead>
      <tr>
        <th scope="col">Quantity</th>
        <th scope="col">Article</th>
        <th scope="col">Taxes</th>
        <th scope="col">Shipping</th>
        <th scope="col">Discounts</th>
        <th scope="col">Unit Price</th>
      </tr>
    </thead>
    <tbody>
      { payment.line_items.map((item, i) => <LineItem item={item} key={`item-${i}`} />) }
    </tbody>
  </table>
)

export default Breakdown