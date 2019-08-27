import React from 'react'
import User from './User'

import './styles/Header.css'

const Header = () => (
  <div className="Header navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div className="collapse navbar-collapse">
      <User />
    </div>
  </div>
)

export default Header