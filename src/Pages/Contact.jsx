import React from 'react'
import axios from 'axios';
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';

function Contact() {
  
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('Restoran', 'template_pevbirth', e.target, '7dJZ5rFPNiHCVj8AT')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  const onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    //console.log(formvalue);
  }

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
    if (formvalue.subject == "" || formvalue.subject == null) {
      result = false;
      alert('Subject Field is required !');
      return false;
    }
    if (formvalue.message == "" || formvalue.message == null) {
      result = false;
      alert('message Field is required !');
      return false;
    }
    return result;
  }


  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/contact`, formvalue);
      //console.log(res);
      if (res.status === 201) {
        toast.success('Contact Success ');
        setFormvalue({ ...formvalue, name: "", email: "", subject: "", message: "" });
      }
    }
  }
  return (
    <div>
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                  <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                  <p><i className="fa fa-envelope-open text-primary me-2" />info@example.com</p>
                </div>
                <div className="col-md-4">
                  <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                  <p><i className="fa fa-envelope-open text-primary me-2" />tech@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <form onSubmit={sendEmail}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" value={formvalue.name} onChange={onchange} className="form-control" name="name" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" value={formvalue.email} onChange={onchange} className="form-control" name="email" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" value={formvalue.subject} onChange={onchange} className="form-control" name="subject" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" value={formvalue.message} onChange={onchange} name='message' placeholder="Leave a message here" id="message" style={{ height: 150 }} >
                          {formvalue.message}
                        </textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button onClick={onsubmit} className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>

  )
}

export default Contact