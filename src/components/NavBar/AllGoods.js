import React, { useState } from 'react';
import styled from 'styled-components';
import arrow from '../../assets/blackArrow.svg';
import MenClothes from '../products/MenClothes';
import WomenClothes from '../products/WomenClothes';
import BabyClothes from '../products/BabyClothes';
import Shoes from '../products/Shoes';
import OtherClothes from '../products/OtherClothes';

function AllGoods({setShow}) {
	const [isActive, setActive] = useState("false");
	
	const handleToggle = () => {
		setActive(!isActive);
	};

  	return (
	 	<All>
			<div className={isActive ? 'dd-menu dd-close' : 'dd-menu dd-open'}>
				<div className='dropdown-header dropdown-all'>
					<p className='dropdown-title  dropdown-all'>Все товары</p>
					<img src={arrow} alt="open arrow" className='dropdown-icon' onClick={handleToggle}/>
				</div>
				
				<MenClothes setShow={setShow}/>
				<WomenClothes setShow={setShow}/>
				<BabyClothes setShow={setShow}/>
				<Shoes setShow={setShow}/>
				<OtherClothes setShow={setShow}/>
			</div>
	 	</All>
  	)
}

const All = styled.nav`
	@media (min-width: 481px) {
		.dd-menu {
			display: flex;
			justify-content: space-between;
		}

		.dropdown-all {
			display: none;
			width: 0;
			height: 0;
		}
	}
	
	@media (max-width: 480px) {
		.dd-close .dropdown-menu {
			height: 0;
			overflow: hidden;
		}
		
		.dd-close .dropdown-icon {
			transform: rotate(90deg);
		}

		.dd-open .dropdown-menu {
			height: 100%;
		}

		.dd-open .dropdown-icon {
			transform: rotate(-180deg);
		}
	}
`

export default AllGoods;