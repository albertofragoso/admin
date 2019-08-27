import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import logo from '../images/logo.png'

import './styles/Sidebar.css'

const Sidebar = () => {

  const [isToggle, setToogle] = useState(false)

  const SidebarToggle = classNames('Sidebar', { toggle: isToggle })

  const handleToggle = () => setToogle(!isToggle)

  return(
    <div className="bg-light border-right">
      <span className="Sidebar-button" onClick={handleToggle}>🍔</span>
      <div className={SidebarToggle}>
        <div className="Sidebar-logo">
          <Link to="/">
            <img src={logo} alt="Admin logo" />
            <span>Conektando</span>
          </Link>
        </div>
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action bg-light">💳 Payments</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">📤 Transfers</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">🔄 Chargebacks</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">🧮 Accounting</a>
          <a href="#" className="list-group-item list-group-item-action bg-light">💻 Developers</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar