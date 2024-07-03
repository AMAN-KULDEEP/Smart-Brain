import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl , box }) => {
  return (

    <div className='relative center ma'>
    	<div className = "relative center mt2 ">

	      <img id='inputimage' style={{ position: 'relative', zIndex: 1, height: '350px', width: 'auto' }} alt='FaceRecognition' src={imageUrl} />
	      <div className='bounding-box' 
	      		style={{ 

	      		top: box.topRow, 
	      		left: box.leftCol , 
	      		right: box.rightCol,
	      		bottom: box.bottomRow,
	      		// height: box.bottomRow - box.topRow,
	      		// width: box.rightCol - box.leftCol

	      	}}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
