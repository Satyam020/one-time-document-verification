import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        {/* Footer: this is footer in section */}
        <div>
          {/* <a href=''>googlr</a> */}
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
        {/* <Link to="/" className="navlink" >Feedback</Link>  <span> </span> */}

        </div>


    </div>
  )
}

export default Footer;