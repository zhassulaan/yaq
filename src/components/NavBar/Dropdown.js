import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AllGoods from './AllGoods';
import LoginButton from '../Button';
import Header from './Header';

function Dropdown({setShow}) {
	const [navbar, setNavbar] = useState(false);
	
	const changeTop = () => {
		if (window.scrollY >= 60) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeTop);

  	return (
		<DropdownContainer className={navbar ? 'active' : ''}>
			<div className='container'>
				<AllGoods setShow={setShow}/>
				<div className="dd-header-content">
					<Header/>
				</div>

				<div className="login-button button">
					<LoginButton text={"ВХОД"}/>
				</div>
			</div>
	 	</DropdownContainer>
  	)
}


const DropdownContainer = styled.nav`
	position: fixed;
	z-index: 2;
	height: 100%;

	.container {
		background: var(--clr-white);
		width: 73.75vw;
		height: 29.375vw;
		padding: 7.5vw 6.25vw 3.75vw;
		margin: 0 13.125vw;
	}

	.dd-header-content {
		display: none;
	}

	.dropdown-menu {
		width: 11.25vw;
	}
	
	.dropdown-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.625vw;
	}

	.dropdown-title {
		line-height: 1.875vw;
		font-size: 1.125vw;
		font-weight: 600;
	}

	.dropdown-icon {
		display: none;
	}

	.dropdown-item {
		height: 1.25vw;
		line-height: 100%;
		margin-bottom: 0.938vw;
	}
	
	.dropdown-link {
		font-size: 1.125vw;
		font-weight: 300;
	}

	.login-button {
		display: none;
		height: 13.889vw;
		margin-top: 5.556vw;
	}

	@media (max-width: 1100px) {
		.container {
			width: 82vw;
			margin: 3.75rem 9vw 0;
		}

		.active {
			margin-top: 1.25rem;
		}

		.dropdown-item {
			line-height: 50%;
		}
	}

	@media (max-width: 768px) {
		.container {
			margin-top: 3.125rem;
		}

		.active {
			margin-top: 0.625rem;
		}
	}

	@media (max-width: 480px) {
		height: max-content;
		
		.container {
			width: 100vw;
			height: 100%;
			margin: 0;
			padding: 5.556vw 5.556vw 11.111vw;
		}
		
		.dropdown-menu {
			width: 100%;
		}
		
		.dropdown-header {
			border-bottom: 1px solid #D9D9D9;
			margin-bottom: 20px;
		}
		
		.dropdown-icon {
			display: block;
		}
		
		.dropdown-title {
			line-height: 30px;
			font-size: 16px;
			font-weight: 400;
		}
		
		.dropdown-close .dropdown-item {
			height: 0;
			overflow: hidden;
			margin: 0;
		}

		.dropdown-close .dropdown-icon {
			transform: rotate(90deg);
		}
		
		.dropdown-open .dropdown-item {
			height: 20px;
			line-height: 100%;
			margin-bottom: 10px;
		}

		.dropdown-open .dropdown-icon {
			transform: rotate(-180deg);
		}

		.dropdown-link {
			font-size: 16px;
		}

		.dd-header-content {
			display: block;
		}
		
		.login-button {
			display: block;
		}
	}
`

export default Dropdown;