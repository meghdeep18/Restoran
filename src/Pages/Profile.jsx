import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'


function Profile() {

  const redirect=useNavigate();
  
  useEffect(()=>{
    if(!(localStorage.getItem('id')))
    {
      redirect('/');
    }
    fetch();
  },[]);

  const [data,setData]=useState({});
  const fetch=async()=>{
    const res=await axios.get(`http://localhost:3000/user/${localStorage.getItem('id')}`);
    setData(res.data);



  }

  return (
    <div>
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Profile</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">My Account</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Profile</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
     
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">PROFILE</h6>
            <h1 className="mb-5">Ur  <span className="text-primary ">Details</span></h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src="img/team-1.jpg" alt />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{data.name}</h5>
                  <small>{data.email}</small><br />
                  <small>{data.mobile}</small><br /><hr />
                  {/* <button  className='button' onClick={()=>redirect('/edit_profile/'+data.id)}>Edit </button> */}
                  
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile