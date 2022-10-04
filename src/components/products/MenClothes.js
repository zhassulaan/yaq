import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import arrow from '../../assets/blackArrow.svg';

function MenClothes() {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

  	return (
		<>
			<ul className={isActive ? 'dropdown-menu dropdown-close' : 'dropdown-menu dropdown-open'}>
				<li className='dropdown-header'>
					<p className='dropdown-title'>Мужская</p>
					<img src={arrow} alt="open arrow" className='dropdown-icon' onClick={handleToggle}/>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_jackets" className='dropdown-link'>Мужские куртки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_vests" className='dropdown-link'>Мужские жилеты</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_pants" className='dropdown-link'>Мужские брюки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_tshirts" className='dropdown-link'>Мужские футболки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_shirts" className='dropdown-link'>Мужские рубашки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_shorts" className='dropdown-link'>Мужские шорты</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/men_hoodies_sweaters" className='dropdown-link'>Мужские толстовки и свитера</NavLink>
				</li>
			</ul>
 		</>
  	)
}

export default MenClothes;