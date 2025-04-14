import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { UserSidebar } from './assets/components/layouts/UserSidebar';
//import { UserNavbar } from './assets/components/layouts/UserNavbar';
//import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserProfile } from './assets/components/user/UserProfile';
import { Signup } from './assets/components/common/Signup';
import axios from 'axios';
import { Login } from './assets/components/common/Login';
import { AddFlat } from './assets/components/society/AddFlat';

import { SocietySidebar } from './assets/components/layouts/SocietySidebar';
import { HordingList } from './assets/components/admin/HordingList';
import LandingPage from './assets/landing/LandingPage';
import { NewSociety } from './assets/components/common/NewSociety';
import { Complaint } from './assets/components/society/Complaint';
//import PrivateRoutes from './assets/components/hook/PrivateRoutes';
import { SecurityGuard } from './assets/components/society/SecurityGuard';
import { EventManeagement } from "./assets/components/society/EventManeagement"
import { Payment } from './assets/components/society/Payment';
import { MySociety } from './assets/components/society/MySociety';
import { NewNotice } from './assets/components/society/NewNotice';
import { Home } from './assets/components/common/Home';
import { AboutUs } from './assets/components/common/AboutUs';




function App() {
  //axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.baseURL = "http://localhost:3000";
  
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  //

  return (
    <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
      <Routes>
        
        <Route path='/hordinglist' element = {<HordingList/>}></Route>
        
        <Route path='/society' element = {<SocietySidebar/>}>
        <Route path="mysociety" element = {<MySociety/>}></Route>
        
        </Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path='/signup' element = {<Signup/>}></Route>
        <Route path="/" element = {<LandingPage/>}></Route>
        <Route path='/home' element = {<Home/>}></Route>
        <Route path='/aboutus' element = {<AboutUs/>}></Route>
      {/*<Route path="/mysociety" element = {<MySociety/>}></Route>*/}
        
      
          
            <Route path="profile" element={<UserProfile />} />
          
      
      <Route path='/user' element = {<UserSidebar/>}> 
          <Route path='newsociety' element = {<NewSociety/>}/>
          <Route path='addflat' element = {<AddFlat/>}></Route>
          <Route path='complaint' element = {<Complaint/>}></Route>
          <Route path='securityguard' element = {<SecurityGuard/>}></Route>
          <Route path='eventmanegement' element = {<EventManeagement/>}></Route>
          <Route path='payment' element = {<Payment/>}></Route>
          

      </Route>

       <Route path="/newnotice" element = {<NewNotice/>}></Route>

        
      </Routes>
    </div>
     
    
  );
}

export default App
