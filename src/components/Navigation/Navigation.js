import React from 'react';

const Navigation = ({onRouteChange, route}) => {
	if(route === 'signin'){
		return (
			<nav style = {{display:'flex', justifyContent:'flex-end'}}>
				<p onClick = {()=> onRouteChange('register')} className = 'f3 underline black dim pointer ma2'>
					Register
				</p>
			</nav>
		);
	}
	else if(route === 'register'){
		return (
			<nav style = {{display:'flex', justifyContent:'flex-end'}}>
				<p onClick = {()=> onRouteChange('signin')} className = 'f3 underline black dim pointer ma2'>
					Sign In
				</p>
			</nav>
		);
	}
	else{
		return (
			<nav style = {{display:'flex', justifyContent:'flex-end'}}>
				<p onClick = {()=> onRouteChange('signout')} className = 'f3 underline black dim pointer ma2'>
					Sign Out
				</p>
			</nav>
		);
	}
	
}

export default Navigation;