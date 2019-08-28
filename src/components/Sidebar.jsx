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
    <div className="bg-light border-right position-fixed z-index">
      <span className="Sidebar-button" onClick={handleToggle}>🍔</span>
      <div className={SidebarToggle}>
        <Link to="/" className="Sidebar-logo">
          <img src={logo} alt="Admin logo" />
          <span className="logo">Conektando</span>
        </Link>
        <div className="list-group list-group-flush">
          <span className="list-group-item list-group-item-action bg-light">💳 Payments</span>
          <span className="list-group-item list-group-item-action bg-light">📤 Transfers</span>
          <span className="list-group-item list-group-item-action bg-light">🔄 Chargebacks</span>
          <span className="list-group-item list-group-item-action bg-light">🧮 Accounting</span>
          <span className="list-group-item list-group-item-action bg-light">💻 Developers</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar