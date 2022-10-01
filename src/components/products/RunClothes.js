import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/blackArrow.svg';

function RunClothes({setShow}) {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

	 return (
		<div>
		  	<li className={isActive ? 'dropdown-header dropdown-close' : 'dropdown-header dropdown-open'} onClick="setShow window.location.reload()">
				<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/run" className='dropdown-title'>Бег</NavLink>
				<img src={arrow} alt="open arrow" className='dropdown-icon'  onClick={handleToggle}/>
			</li>
	  	</div>
	)
}

export default RunClothes;