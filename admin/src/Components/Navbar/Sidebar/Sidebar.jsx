import React from 'react'
import '/Sidebar.css '
import {Link} from 'react-router-dom'
import product_icon from '../../assets/'

const Sidebar = () => {
  return (
    <div className="didebar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>.
        <div className="sidebar-item">
         <img src={product_icon} alt="" />
        </div>
       </Link>
    </div>
  )
}

export default Sidebar