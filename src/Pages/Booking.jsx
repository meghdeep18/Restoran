import React from 'react'
import axios from 'axios';
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';


function Booking() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    message: "",
  })

  // creates random id 
  const onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    //console.log(formvalue);
  }

  // form validation

  const validation = () => {
    var result = true;
    if (formvalue.name == "" || formvalue.name == null) {
      result = false;
      alert('Name Field is required !');
      return false;
    }
    if (formvalue.email == "" || formvalue.email == null) {
      result = false;
      alert('Email Field is required !');
      return false;
    }
  
    if (formvalue.message == "" || formvalue.message == null) {
      result = false;
      alert('message Field is required !');
      return false;
    }
    return result;
  }

// onsubmit set the value on the api 

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/Booking`, formvalue);
      //console.log(res);
      if (res.status === 201) {
        toast.success('Booking Successful ');
        setFormvalue({ ...formvalue, name: "", email: "", message: "" });
      }
    }
  }

  return (
  <div>{/* Reservation Start */}
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
      <div className="col-md-6">
       
      </div>
      <div className="col-md-12 bg-dark d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
          <h1 className="text-white mb-4">Book A Table Online</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-12">
                <div className="form-floating">
                  <input type="text" className="form-control"value={formvalue.name} onChange={onchange}  name='name' id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating">
                  <input type="email" className="form-control"value={formvalue.email} onChange={onchange}  name="email"id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Special Request" value={formvalue.message} onChange={onchange}  name='message' id="message" style={{height: 100}} defaultValue={""} />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button onClick={onsubmit} className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Reservation Start */}</div>

  )
}

export default Booking