import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import SearchBar from './SearchBar';
import CartButtons from './CartButtons';
import Dropdown from './Dropdown';
import toggle from '../../assets/toggle.svg';
import logo from '../../assets/logo.svg';

function Navbar() {
	const [show, setShow] = useState(false);
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [navbar, setNavbar] = useState(false);
	
	const changeTop = () => {
		if (window.scrollY >= 15) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeTop);
	
	const handleSubmit = async(ev) => {
		ev.preventDefault();
		setShow(!show);
	}
	
	const search = async(ev) => {
		ev.preventDefault();
		setShowSearchBar(!showSearchBar);
	}

	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [show])

  	return (
		<Wrapper>
			<div className="header">
				<Header
					show={showSearchBar} 
					setShow={search} 
				/>
			</div>

			<div className={navbar ? ' active' : ''}>
				<div className='navbar-container'>
					{showSearchBar ? null :
						<div className="left-container">
							<img src={toggle} alt="navbar toggle" className='nav-toggle' onClick={handleSubmit}/>

							<Link to="/" className='nav-logo'>
								<img src={logo} alt="logo" onClick="window.location.reload()"/>
							</Link>
					
							<ul className='nav-menu'>
								<li className='nav-item'>
									<Link to="/" className='nav-link' onClick={handleSubmit}>ГЛАВНАЯ</Link>
								</li>
								<li className='nav-item' onClick="window.location.reload()">
									<Link to="/products/clothes" className='nav-link'>ОДЕЖДА</Link>
								</li>
								<li className='nav-item' onClick="window.location.reload()">
									<Link to="products/clothes/shoes" className='nav-link'>ОБУВЬ</Link>
								</li>
								<li className='nav-item' onClick="window.location.reload()">
									<Link to="products/equipment" className='nav-link'>СНАРЯЖЕНИЕ</Link>
								</li>
								<li className='nav-item' onClick="window.location.reload()">
									<Link to="products/accessories" className='nav-link'>АКСЕССУАРЫ</Link>
								</li>
								<li className='nav-item' onClick="window.location.reload()">
									<Link to="products/run" className='nav-link'>БЕГ</Link>
								</li>
								<li className='nav-item' onClick="window.location.reload()">
									<Link to="/contacts" className='nav-link'>КОНТАКТЫ</Link>
								</li>
							</ul>
						</div>
					}

					{showSearchBar ? <SearchBar/> : null}
					<CartButtons 
						show={showSearchBar} 
						setShow={search} 
					/>
				</div>
			</div>

			{show ? <Dropdown setShow={handleSubmit}/> : null}
		</Wrapper>
  )
}

const Wrapper = styled.nav`
	max-width: 100rem;
	margin-bottom: 5rem;

  	.navbar-container {
		background: var(--clr-white);
		position: fixed;
		z-index: 3;
		width: 100%;
		height: 5rem;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
		padding: 0 13.125vw;
  	}

	.active,
	.active .navbar-container {
		top: 0;
	}

	.left-container {
		display: flex;
		align-items: center;
	}

	.nav-toggle {
		display: none;
	}

  	.nav-logo {
		display: flex;
		align-items: center;
   	cursor: pointer;
		margin-right: 2vw;
  	}

  	.nav-menu {
    	display: flex;
  	}

	.nav-item {
		display: flex;
		align-items: center;
		margin: 0 0.625vw;
	}
	
	.nav-link {
		font-size: 14px;
	}

	.nav-link:hover {
		color: var(--clr-primary-2);
		text-decoration: underline;
	}

	@media (max-width: 1100px) {
		margin-bottom: 3.75rem;

		.navbar-container {
			height: 3.75rem;
			padding: 0 9vw;
		}

		.nav-link {
			font-size: 12px;
		}
	}

	@media (max-width: 768px) {
		margin-bottom: 6.361vw;

		.navbar-container {
			height: 6.361vw;
		}

		.nav-logo img {
			height: 4.167vw;
		}

		.nav-link {
			font-size: 1.458vw;
		}
	}

	@media (max-width: 480px) {
		margin-bottom: 3.125rem;

		.header {
			display: none;
		}
		
		.navbar-container {
			top: 0;
			height: 3.125rem;
			padding: 0 5.5556vw;
		}

		.nav-toggle {
			display: flex;
			margin-right: 31.944vw;
		}
		
		.nav-menu {
			display: none;
		}

		.nav-logo img {
			height: 1.875rem;
		}
	}
`

export default Navbar