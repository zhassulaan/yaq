import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/blackArrow.svg';

function WomenClothes({setShow}) {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

  	return (
	 	<>
			<ul className={isActive ? 'dropdown-menu dropdown-close' : 'dropdown-menu dropdown-open'}>
				<li className='dropdown-header'>
					<p className='dropdown-title'>Женская</p>
					<img src={arrow} alt="open arrow" className='dropdown-icon' onClick={handleToggle}/>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_jackets" className='dropdown-link'>Женские куртки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_vests" className='dropdown-link'>Женские жилеты</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_pants" className='dropdown-link'>Женские брюки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_tshirts" className='dropdown-link'>Женские футболки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_shirts" className='dropdown-link'>Женские рубашки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_shorts" className='dropdown-link'>Женские шорты</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/clothes/women_hoodies_sweaters" className='dropdown-link'>Женские толстовки и свитера</NavLink>
				</li>
			</ul>
	 	</>
  	)
}

export default WomenClothes;