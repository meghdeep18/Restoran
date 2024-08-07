import React from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
// import { toast } from 'react-toastify';


function Header() {
 

    const redirect = useNavigate();

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        toast.success('Logout Successfull !');
        redirect('/');
    }

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
          {(() => {
            if (localStorage.getItem('id')) {
              return (  
                <p className="mb-0 ms-3"> Hi ... {localStorage.getItem('name')}:)</p>
              )
            }
          })()}
          <div className="navbar-nav ms-auto py-0 pe-4">

            <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
            <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
            <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
            <div className="nav-item dropdown">
              <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                <NavLink to="/profile" className="dropdown-item">profile</NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>&nbsp; &nbsp;
            
            {(() =>{

                   if (localStorage.getItem('id')) 
                   {
                    return(
                  <a href="javascript:void(0)" onClick={logout} className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Logout<i className="fa fa-arrow-right ms-3" /></a>
                           )                
                  }
                  else 
                  {
                  return (
                          // <Link to="/signup" className="btn btn-primary py-2 px-4">Registration</Link> 
                                            <Link to="/login" className="btn btn-primary rounded-0 py-4 px-md-4 d-none d-lg-block">Registration<i className="fa fa-arrow-right ms-3" /></Link>
                        )
                                    
                  }
                  })()}

           </div>
          {/* <NavLink to="/signup" className="btn btn-primary py-2 px-4">Login/Signup </NavLink> */}
        </div> 
      </nav>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <NavLink href className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</NavLink>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="img/hero.png" alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Header