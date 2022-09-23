import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/blackArrow.svg';

function EquipmentClothes({setShow}) {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

 	return (
	 	<div>
			<li className={isActive ? 'dropdown-header dropdown-close' : 'dropdown-header dropdown-open'} onClick="setShow window.location.reload()">
				<NavLink activeStyle={{ textDecoration: 'underline' }} to="/equipment" className='dropdown-title'>Снаряжение</NavLink>
				<img src={arrow} alt="open arrow" className='dropdown-icon'  onClick={handleToggle}/>
			</li>
		</div>
  	)
}

export default EquipmentClothes;