import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav>
      <ul className="menu">
        <li className="menu-list">
          <a href="index.html" className="menu-a">Home</a>
        </li>
        <li className="menu-list">
          <a href="cars.html" className="menu-a">Cars</a>
        </li>
        <li className="menu-list">
          <a href="service.html" className="menu-a">Service</a>
        </li>
        <li className="menu-list">
          <a href="recentbooking.html" className="menu-a">Recent Booking</a>
        </li>
        <li className="menu-list">
          <a href="contact.html" className="menu-a">Contacts</a>
        </li>
        <li className="menu-list">
          <a href="about.html" className="menu-a">About</a>
        </li>
        <li className="menu-list">
          <a href="login.html" className="menu-a">Login</a>
        </li>
      </ul>
    </nav>
    
    </>
  )
}

export default Navbar