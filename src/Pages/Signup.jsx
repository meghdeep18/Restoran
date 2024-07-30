import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';


function Signup() {
  
 const [formvalue,setFormvalue]=useState({
  id:"",
  name:"",
  email:"",
  password:"",
  mobile:"",
  status:""
})

const onchange=(e)=>{
setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
console.log(formvalue);
}

const validation=()=>{
var result=true;
if(formvalue.name==="" || formvalue.name===null)
{
  result=false;
  toast.error('Name Field is required !');
  return false;
}
if(formvalue.email==="" || formvalue.email===null)
{
  result=false;
  toast.error('Email Field is required !');
  return false;
}
if(formvalue.password==="" || formvalue.password===null)
{
  result=false;
  toast.error('Password Field is required !');
  return false;
}
if(formvalue.mobile==="" || formvalue.mobile===null)
{
  result=false;
  toast.error('Mobile Field is required !');
  return false;
}
if(formvalue.mobile==="" || formvalue.mobile===null)
{
  result=false;
  toast.error('Mobile Field is required !');
  return false;
}
return result;
}


const onsubmit=async(e)=>{
  e.preventDefault();
  if(validation())
  {
    const res=await axios.post(`http://localhost:3000/user`,formvalue);
    //console.log(res);
    if(res.status===201)
    {
      toast.success('Register Success ');
      setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
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
          
          <div className="col-md-12">
              <div className="wow fadeInUp p-5" data-wow-delay="0.2s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" value={formvalue.name} onChange={onchange} className="form-control" name="name" id="name" placeholder="Your Name" />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="email" value={formvalue.email} onChange={onchange} className="form-control" name="email" id="email" placeholder="Your Email" />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="password" value={formvalue.password} onChange={onchange} className="form-control" name="password" id="password" placeholder="Password" />
                        <label htmlFor="subject">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="number" value={formvalue.mobile} onChange={onchange} className="form-control" name="mobile" id="password" placeholder="Mobile" />
                        <label htmlFor="subject">Mobile</label>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <button onClick={onsubmit} className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                      <br />
                      <br /><br />
                      <Link to='/login'>If you already registered then Click Here For Login</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div> 
          <div>
          
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
  </div>
  </div>
  )
}

export default Signup