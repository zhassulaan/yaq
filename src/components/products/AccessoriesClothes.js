import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/blackArrow.svg';

function AccessoriesClothes({setShow}) {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

	 return (
		<div>
		  <li className={isActive ? 'dropdown-header dropdown-close' : 'dropdown-header dropdown-open'} onClick="setShow window.location.reload()">
				<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/accessories" className='dropdown-title'>Аксессуары</NavLink>
				<img src={arrow} alt="open arrow" className='dropdown-icon'  onClick={handleToggle}/>
			</li>
	  </div>
	 )
}

export default AccessoriesClothes;