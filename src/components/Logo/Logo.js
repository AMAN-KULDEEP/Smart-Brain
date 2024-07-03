import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import Brain from './brain.png';
const Logo = () => {
  return (
  	
	    <Tilt style={{ height: '200px', width:'200px', backgroundColor: 'lightorange' }}
	    		className = 'br2 shadow-3 grad'>
	      <div className = 'pa3'>
	        <img style={{ height: '150px', width:'150px'}} alt = 'logo' src = {Brain}/>
	      </div>
	    </Tilt>
    
  );
};

export default Logo;