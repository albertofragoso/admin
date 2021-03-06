import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import './styles/User.css'

const User = () => {

  const [isDropdown, setDropdown] = useState(false)

  const Dropdown = classNames('dropdown-menu dropdown-menu-right', { show: isDropdown })

  const handleDropdown = () => setDropdown(!isDropdown)

  return(
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <img className="User-photo" src="https://avatars0.githubusercontent.com/u/24305046?s=460&v=4" alt="User photo"/>
      </li>
      <li className="nav-item">
        <Link to="/">
          <span className="nav-link">Alberto Fragoso</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" onClick={handleDropdown}></span>
        <div className={Dropdown}>
          <span className="dropdown-item">Profile</span>
          <span className="dropdown-item">Logout</span>
        </div>
      </li>
    </ul>
  )
}

export default User