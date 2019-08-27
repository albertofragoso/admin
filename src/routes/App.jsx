import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Payments from '../pages/Payments'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => (
  <div className="d-flex">
    <BrowserRouter>
      <Sidebar />
      <Layout>
        <Switch>
          <Route exact path="/" component={Payments} />
        </Switch>
      </Layout>  
      <Footer />
    </BrowserRouter>
  </div>
)

export default App