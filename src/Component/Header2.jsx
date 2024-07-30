import React from 'react'
import { NavLink } from 'react-router-dom'
function Header2() {
  return (
<div className="container-xxl position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
    <a href className="navbar-brand p-0">
      <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Restoran</h1>
      {/* <img src="img/logo.png" alt="Logo"> */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0 pe-4">
        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-item nav-link ">About</NavLink>
        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
        <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
        <div className="nav-item dropdown">
          <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
          <div className="dropdown-menu m-0">
            <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
            <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
            <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
          </div>
        </div>
        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
      </div>
      <NavLink to="/signup" className="btn btn-primary py-2 px-4">Registration</NavLink>
    </div>
  </nav>
  <div className="container-xxl py-5 bg-dark hero-header mb-5">
    <div className="container text-center my-5 pt-5 pb-4">

      <nav aria-label="breadcrumb">
      </nav>
    </div>
  </div>
</div>

  )
}

export default Header2
