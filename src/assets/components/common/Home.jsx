import React from 'react'
//import "../../assets/landing/css/style.css";
//import "../../assets/landing/css/responsive.css";
//import "../../assets/landingPage.css";
import society from "../../image/society.jpg";
import "../../components/home.css";
import  night from "../../image/night.jpg";
import  image from "../../image/image1.png";
import  payment from "../../image/payment.jpg";
import  image1 from "../../image/image.png";

export const Home = () => {
  return (
    <div >
          <section className='section1'>
            <div>
            <img src={night} alt="" />    
            </div>
          </section>


            <section className='section2'>
              <div className='text'>
                    <h3> Maintenance and Utility  Payment</h3>
                    <p> Make and track payments , all from the app.
                       Check your payment history and make payments directly.
                       Convenient online payment options for all society bills. 
                       Now, you will never miss paying society bills on time.</p>
                       <p>Easy Tracking of All Payments.</p>
            </div>
                
                <img src={payment} alt="" />
                  
              
              </section>
            <section className='section'>
              <div className='text'>
                    <h3> Raising and Solving Society Complaints</h3>
                    <p> Are you facing electricity issue in your block or is the lift still out-of-service? 
                      Whatever be the problem, register your society complaints in one place.
                      If you notice that the plumbing, wiring, etc. in your home or anywhere in the society needs attention, then register your complaint through the app.
                   </p>
            </div>
                
                <img src={image} alt="" />
                  
              
              </section>
              <section className='section2'>
              <div className='text'>
                    <h3> Society Security Guard</h3>
                    <p> Check in/Check out of visitors is a prime responsibility of security guards appointed by the members of a housing society. Security guards also monitor CCTV cameras and handle other security equipment. Guards are responsible for coordinating with the management and reporting all incidents. Whenever required, 
                      guards are answerable to law enforcement officers, like the police.</p>
            </div>
                
                <img src={image1} alt="" />
                  
              
              </section>
              </div>
  )
}
