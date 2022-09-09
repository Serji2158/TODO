import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar: React.FC = () => {
  return <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        <b>TODO: </b>
        be sure you exactly know what you have to do now   
      </a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">Task List</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
}