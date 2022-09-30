import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/blackArrow.svg';

function BabyClothes({setShow}) {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
    	setActive(!isActive);
 	};

  	return (
	 	<>
			<ul className={isActive ? 'dropdown-menu dropdown-close' : 'dropdown-menu dropdown-open'}>
				<li className='dropdown-header'>
					<p className='dropdown-title'>Детская</p>
					<img src={arrow} alt="open arrow" className='dropdown-icon' onClick={handleToggle}/>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_jackets" className='dropdown-link'>Детские куртки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_vests" className='dropdown-link'>Детские жилеты</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_pants" className='dropdown-link'>Детские брюки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_tshirts" className='dropdown-link'>Детские футболки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_shirts" className='dropdown-link'>Детские рубашки</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_shorts" className='dropdown-link'>Детские шорты</NavLink>
				</li>
				<li className='dropdown-item' onClick="setShow window.location.reload()">
					<NavLink activeStyle={{ textDecoration: 'underline' }} to="/products/clothes/baby_hoodies_sweaters" className='dropdown-link'>Детские толстовки и свитера</NavLink>
				</li>
			</ul>
	 	</>
  	)
}

export default BabyClothes;