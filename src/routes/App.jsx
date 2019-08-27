import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const App = () => (
  <div className="d-flex">
    <Sidebar />
    <Layout>
      <div class="container-fluid">
        <h1 class="mt-4">Payments</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque nihil quae repudiandae tempore consequuntur nobis officiis, exercitationem rem ratione dignissimos illum, esse consectetur fugit at totam ipsa eum. Quos, minima.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi ducimus nulla atque reprehenderit molestias, provident animi tempore nemo deleniti dolores quasi id laudantium eligendi veniam quisquam saepe itaque quidem?</p>
      </div>
    </Layout>  
    <Footer />
  </div>
)

export default App