import React from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Payments from '../pages/Payments'
import Footer from '../components/Footer'

const App = () => (
  <div className="d-flex">
    <Sidebar />
    <Layout>
    <Payments />
    </Layout>  
    <Footer />
  </div>
)

export default App