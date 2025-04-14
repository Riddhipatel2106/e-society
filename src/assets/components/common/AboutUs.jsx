import React from 'react'
import "../../components/home.css";
import aboutus from "../../image/aboutus.jpg";

export const AboutUs = () => {
  return (
    <div className='col1-0'>
        <div className='wrapper'>
            <img src={aboutus} alt="" />
        </div>
        <div className='about-1'>
            <h3> About Us</h3>
        </div>
        <div className='about-2'>
            <p> E-society was started with the aim to reduce information asymmetry in the 
                Real Estate industry and provide customers with world-class service using cutting-edge technology.
                 When we saw what was missing in the real estate industry, we created products to bridge the gap. But, when it came to home security, 
                we saw many areas that needed work. That is why we created – E-society.</p>
        </div>
        <div className='about-2'>
            <p>The constant movement of service staff and guests can make security management an inconvenience. 
                While most apartment buildings and residential complexes do have security measures in place, they are either outdated or rely heavily on 
                manual record-keeping – which is time-consuming and sometimes ineffective.</p>
        </div>
        <div className='about-2'>
            <p>
            Moreover, in larger societies, there is always doubt on the number of staff required to fulfil 
            day-to-day tasks such as complaint management, accounting and so on. This can pose an issue for residents and other committee members to 
            deal with issues like unauthorised visitor  and maintaining service staff attendance. Sometimes, residents are 
            also required to respond to calls from the main gate to authorize entry - 
            which might be troublesome if they are busy at that moment.
            </p>
        </div>
        <div className='about-2'>
            <p>
            This is where E-society comes to your rescue. We offer a plethora of services and 
            features which enables our resident community to manage multiple activities from the 
            comfort of their homes – from finding domestic help to monitoring visitor entry and 
            pre-authorising guest visits, it can all be done by phone. We believe that it also 
            further strengthens the security and safety of your society since E-society keeps both visual 
            and digital records of all entries and exits – accessible at any time from anywhere – 
            and automates staff entry through a biometric proces.
            </p>
        </div>
        
        </div>
  )
}
