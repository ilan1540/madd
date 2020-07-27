import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar  bg-dark">
        <a className="navbar-brand" href="/">
          <i className="fas fa-home"></i>
        </a>
        <a className="navbar-brand" href="/lastmadd">
          <i className="fas fa-chart-line"></i>
        </a>
        <a className="navbar-brand" href="/tablemadd">
          table
        </a>
        <h1>מדד המחירים לצרכן</h1>
      </nav>
    </div>
  );
};

export default Navbar;
