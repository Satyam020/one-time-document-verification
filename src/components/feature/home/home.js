import React from 'react'
import "./home.css"
import {Carousel}  from "react-bootstrap";
import { Link } from "react-router-dom";
// import Footer from "../";


const Home = () => {

  return (
    <div className='home'>
 {/*carousel */}
      <div className='show'>

      {/* <img src="http://www.hcpcollege.in/assets/img/student.jpg" alt='images' width='30%px'/> */}
      {/* <video width="750" height="500" controls >
      <source src="https://youtu.be/dVimmZT_x6U" type="video/mp4"/>
     <   /video> */}
    
        <Carousel>
        <Carousel.Item>
        <img 
        className='d-block w-100' 
        src="https://image.shutterstock.com/image-photo/group-students-260nw-446830360.jpg"
        // alt="Girl in a jacket" width="50%" height="30%"
        alt='first'/>
        <Carousel.Caption>
          {/* <h1 id="caps">Addmition in collage</h1> */}
      </Carousel.Caption>  
        
      </Carousel.Item>
      
      {/* <Carousel.Caption>
        <h1>One point student verification</h1>
      </Carousel.Caption> */}
      <Carousel.Item>
        <img
        className='d-block w-100'  
        src="https://www.shutterstock.com/image-photo/group-best-friends-walking-talking-600w-1069910366.jpg" /> 
        <Carousel.Caption>
          {/* <h1 id="caps">Visit website for registration  </h1> */}
      </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d-block w-100' 
        src="https://www.shutterstock.com/image-photo/blurred-view-professional-team-working-600w-1144358600.jpg"/> 
          <Carousel.Caption>
          {/* <h1 id="caps">Verification </h1> */}
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='d-block w-100' 
        src="https://www.shutterstock.com/image-photo/happy-students-diplomas-outdoors-graduation-600w-1540539377.jpg"/>  
        <Carousel.Caption>
          {/* <h1 id="caps">Succesfull </h1> */}
      </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
        
      </div>
{/* introduction */}
      <div className='cont mv-20'>
          <div className='intro'>
            <h2 className='align-centre'>ONE POINT STUDENT VERIFICATION</h2>
          </div>
            This is a global platform where student are verifed by providing some essential information at one point.
              'At one point' means, student's can put there all information at one platform. Once information verified by the admin then the data will be available for 
              organigation for further processes.
              Student can also get the data verification status on the same platform.
              
        </div>

{/* six step for using feature */}
      <div>
      <div className='heading mt-40'>
        <h2>There are six step for using one point student verification</h2>
      </div>
      <div className='boxes'>
      <div className='leftbox'><h3>REGISTER</h3>
      <div>
      <img 
      className='d-block w-100' 
      src="https://media.istockphoto.com/photos/businessman-filling-online-registration-form-picture-id1013435204?b=1&k=20&m=1013435204&s=170667a&w=0&h=AyuR-G-C9lPYAIf6noX4xVzbwwuH83jxIeAUz_w3gIs="/></div>
      </div>
      <div className='middlebox'><h3>FILL INFORMATION</h3>
      <div>
      <img 
      className='d-block w-100' 
      src="https://smitinfotech.com/wp-content/uploads/2016/08/form-filling.jpg"/></div>
      </div>
      <div className='rightbox'><h3>SUBMIT</h3>
      <div>
      <img 
      className='d-block w-100' 
      src="https://img.freepik.com/premium-photo/submit-button-keyboard-concept-green-button-grey-computer-keyboard-blurred-motion-background_431724-4268.jpg?w=2000"/></div>
      </div>
      </div>
      <div className='boxes'>
      <div className='leftbox'><h3>VERIFICATION</h3><div>
      <img 
      className='d-block w-100' 
      src="https://sterilebarrier.org/wp-content/uploads/2020/06/Design-Validation.png"/></div>
      </div>
      <div className='middlebox'><h3>ACCEPET OR REJECT</h3><div>
      <img 
      className='d-block w-100' 
      src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5f59e7154cedfd00173b6822/images/5fda2889a5d295659b3697de/file-SsnDlajwtp.png"/></div></div>
      <div className='rightbox'><h3>CHECK STATUS</h3><div>
      <img 
      className='d-block w-100' 
      src="https://intowntitleloans.com/wp-content/uploads/2020/03/qqq.jpg"/></div></div>
      </div>
      </div>

{/* version block */}
      <div>
      <div className='heading mt-40'>
        <h2 className=''>ALREADY HAVE THREE VERSIONS INCLUDING THIS ONE</h2>
      </div> 
      <div className='boxes'>
      <div className='leftbox'><h3>VERSION-1</h3>
      <div>
      <img
      className='d-block w-100' 
      src="https://www.version1.com/wp-content/uploads/2019/03/v1-placeholder-image-white-340x220.jpg"/></div>
      <a href="https://630a48200a0b9519ec268437--graceful-pudding-4a7ad8.netlify.app/">click hear to see first version</a>
      </div>
      <div className='middlebox'><h3>VERSION-2</h3>
      <div>
      <img
      className='d-block w-100' 
      src="https://i0.wp.com/version-2.com.sg/wp-content/uploads/2020/05/v2-logo-for-site-01.png?fit=955%2C239&ssl=1"/></div>
      <a href="https://hilarious-elf-93bbdc.netlify.app/">click hear to see second version</a></div>

      <div className='rightbox'><h3>LATEST</h3>
      <div>
      <img
      className='d-block w-100' 
      src="https://cdn2.vectorstock.com/i/1000x1000/20/16/new-version-banner-design-vector-23262016.jpg"/>
      </div>




      </div>
      </div>
      </div>
{/*footer  */}
        <div className='foot'>
          <div>
        <Link to="/" className="navlink" >Home</Link>  <span> </span>
        <Link to="/about" className="navlink" >About</Link>  <span> </span>
        <Link to="/" className="navlink" >Banefite</Link>  <span> </span>
        <Link to="/help" className="navlink" >Contact</Link>  <span> </span>
        {/* <Link to="/" className="navlink" >FAQ</Link>  <span> </span> */}
        </div>
        <div>
        <Link to="/" className="navlink" >Terms & condition</Link>  <span> </span>
        <Link to="/" className="navlink" >privecy policy</Link>  <span> </span>
        <Link to="/" className="navlink" >Copyright policy</Link>  <span> </span>
        <Link to="/" className="navlink" >Disclaimer</Link>  <span> </span>
        </div>
        </div>
</div>
  )
}

export default Home;