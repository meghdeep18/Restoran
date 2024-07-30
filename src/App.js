import React from 'react'
import {Routes,Route,} from 'react-router-dom'
import Header from './Component/Header'
import About from './Pages/About'
import Footer from './Component/Footer'
import Index from './Pages/Index'
import Header2 from './Component/Header2'
import Service from './Pages/Service'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Testimonial from './Pages/Testimonial'
import Team from './Pages/Team'
import Booking from './Pages/Booking'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Profile from './Pages/Profile'


function App() {
  return (

<Routes>
  <Route path='/' index  element={<><Header/><Index/><Footer/></>}></Route>
  <Route path='about'   element={<><Header2/><About/><Footer/></>}></Route>
  <Route path='service'   element={<><Header2/><Service/><Footer/></>}></Route>
  <Route path='menu'   element={<><Header2/><Menu/><Footer/></>}></Route>
  <Route path='contact'   element={<><Header2/><Contact/><Footer/></>}></Route>
  <Route path='testimonial'   element={<><Header2/><Testimonial/><Footer/></>}></Route>
  <Route path='team'   element={<><Header2/><Team/><Footer/></>}></Route>
  <Route path='booking'   element={<><Header2/><Booking/><Footer/></>}></Route>
  <Route path='profile'   element={<><Header2/><Profile/><Footer/></>}></Route>



  {/* registartion */}
  
  <Route path='signup'   element={<><Header2/><Signup/><Footer/></>}></Route>
  <Route path='login'   element={<><Header2/><Login/><Footer/></>}></Route>





  




</Routes>

  )
}

export default App
