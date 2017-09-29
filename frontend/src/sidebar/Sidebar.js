import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => (
  <aside className="left-sidebar">
    <div>
      <Link to="/">
        <div className="logo">
        </div>
      </Link>

      <Link to="/create">
        <div className="create-post btn">
          <span>new post</span>
        </div>
      </Link>

    </div>
  </aside>
)

export default Sidebar
