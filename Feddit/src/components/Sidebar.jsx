import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({ onFilterChange }) {
  return (
    <aside>
      <div className="sidebar-menu">
        <ul>
          <li onClick={() => onFilterChange('home')}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => onFilterChange('popular')}>
            <Link to="/popular">Popular</Link>
          </li>
          <li onClick={() => onFilterChange('new')}>
            <Link to="/new">New</Link>
          </li>
          <li onClick={() => onFilterChange('top')}>
            <Link to="/top">Top</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul className="policies">
          <li>
            <Link to="/content-policy">Content Policy</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/user-agreement">User Agreement</Link>
          </li>
        </ul>
        <p>Feddit, DQ © 2024, All rights reserved.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
