import React from 'react';
import './about.css';
const About = () => {
  const headerContainer={
    color: "black"
  }
  return (
    <div style={headerContainer}>
        <h1>About the website.</h1>
        <h4>This website work on following three steps.</h4>
        <div className='about__step-container'>
          <p className="about__step step-1">1. Student register itself.</p>
          <p className="about__step step-2">2. Once succesfully registeration, user need to be fill the application form with informationl like Name, DOB, Mobile number, Qulification etc. </p>
          <p className="about__step step-3">3. User can check verification status, that are done by Admin.</p>
        </div>
        <div  className="about__note">Note:- Organigation can shortlist the data based on the verification status that are done by admin.</div>

        <div>
          <h2>version-2 <p>How they works</p></h2>
          
        <video controls width="100%" autoPlay>
      <source src="#" type="video/webm"/>
      
      Sorry, your browser doesn't support videos.
    </video>
   
        </div>

    </div>
  )
}

export default About;