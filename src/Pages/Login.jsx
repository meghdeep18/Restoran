import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Login() {


  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_w0yv91m', 'template_qfzo3ui', e.target, '7N-2B1tb4vkoFsprg')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
  
  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  })

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    //console.log(formvalue);
  }

  const validation = () => {
    var result = true;

    if (formvalue.email === "" || formvalue.email == null) {
      result = false;
      toast.error('Email Field is required !');
      return false;
    }
    if (formvalue.password === "" || formvalue.password == null) {
      result = false;
      toast.error('Password Field is required !');
      return false;
    }
    return result;
  }


  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
      if (res.data.length > 0) {
        if (res.data[0].password === formvalue.password) {

          if (res.data[0].status === "Unblock") {
            // session variable create
            localStorage.setItem('name', res.data[0].name);
            localStorage.setItem('id', res.data[0].id);

           toast.success('Login Successfull !');
            setFormvalue({ ...formvalue, email: "", password: "" });
            redirect('/');
          }
          else {
            toast.error('Login Failed due to user Blocked !');
            setFormvalue({ ...formvalue, email: "", password: "" });
            redirect('/login');
          }
        }
        else {
          toast.error('Password Not valid !');
          setFormvalue({ ...formvalue, email: "", password: "" });
        }
      }
      else {
        toast.error('Username Not valid !');
        setFormvalue({ ...formvalue, email: "", password: "" });
      }
    }
  }
  return (
    <div><div>
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
          <form onsubmit={sendEmail}>
          <div className="col-md-12">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <form>
                <div className="row g-3">
                  <div className="col-md-12">
                 
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input type="email" value={formvalue.email} onChange={onchange}  className="form-control" id="email" name='email' placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="password" value={formvalue.password} onChange={onchange} className="form-control" id="password"name='password' placeholder="password" />
                      <label htmlFor="password">password</label>
                    </div>
                  </div>
                  <div className="col-12">
                 
                  </div>
                  <div className="col-12">
                  <button onClick={onsubmit}  className="btn btn-primary w-100 py-3" value="send" type="submit">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </form>
          <div>

            <Link to="/signup">
                if u have  already not  Register plz click here
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
  </div>
  </div>
  )
}

export default Login