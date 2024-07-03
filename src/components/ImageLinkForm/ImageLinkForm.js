import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange , onButtonSubmit}) => {
	return(

		<div>
			<p className = 'f3'>
				{'This Brain will detect faces in your pictures'}
			</p>
			
			<div className = 'form center pa4 ba3 shadow-3'>
				<input className = 'f4 pa2 w-70 center' type="text" onChange = {onInputChange}/>
				<button 
					className = 'f4 w-30 link grow ph3 pv2 dib white bg-light-purple'
					onClick = {() => onButtonSubmit()}
					>detect
				</button>
			</div>
			
		</div>
	);
}

export default ImageLinkForm;