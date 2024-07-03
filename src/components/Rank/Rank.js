import React from 'react';

const Rank = (prop) => {
	const {name , entries} = prop;
	return(

		<div>
			<div className = 'f3 white'>
				{`${name} your total entries are `}
			</div>
			<div className = 'f1 white'>
				{`#${entries}`}
			</div>
			
		</div>
	);
}

export default Rank;