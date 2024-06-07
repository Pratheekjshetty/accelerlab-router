import React from 'react'
import {Link} from 'react-router-dom'
export default function Layout(props) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div>{props.children}</div>
    </div>
  )
}
