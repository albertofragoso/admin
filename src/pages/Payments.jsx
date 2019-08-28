import React from 'react'
import useGetPayments from '../hooks'
import PaymentItem from '../components/PaymentItem'
import { Link } from 'react-router-dom'

const API = 'https://us-central1-admin-conekta.cloudfunctions.net/api'

const Payments = () => {
  const payments = useGetPayments(API)

  return (
    <div className="container-fluid mb-5">
      <h1 className="mt-4">Payments</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptates sint. Quae deleniti eos aspernatur minus eligendi, est suscipit illum, molestiae dicta dolorem tenetur doloremque eius hic. Consequuntur, aliquam aperiam.</p>
      {
        !payments.length
        ? <div className="text-center">
            <div className="spinner-border text-primary mt-5" style={{width: "3rem", height: "3rem"}} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        : <div className="table-responsive"> 
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment status</th>
                  <th scope="col">Payment type</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                { payments.map(payment => <PaymentItem payment={payment} key={payment.id} />) }
              </tbody>
            </table>
          </div>
      }
    </div>
  )
}

export default Payments