import React, { useEffect } from 'react';
import styled from 'styled-components';
import error from '../assets/error.svg';
import { UserState } from '../../../context/UserContext';

function ErrorPage({ title, text }) {
	const {
		showLogin,
		showSignup
	} = UserState();
	
	useEffect(() => {
		if (showLogin || showSignup) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [showLogin, showSignup])
	
 	return (
	 	<Wrapper>
			<img src={error} alt="error smile" className='error-icon'/>
			<h1 className='error-title title'>{title}</h1>
			<p className='error-text'>{text}</p>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 6.25rem 0 0;

	.error-title {
		font-size: 40px;
		font-weight: 500;
		margin-top: 1.875rem;
	}

	.error-text {
		font-size: 20px;
		font-weight: 400;
		margin-top: 1.25rem;
		padding-bottom: 14.375rem;
	}

	@media (max-width: 992px) {
		.error-icon {
			width: 15rem;
			height: 15rem;
		}

		.error-title {
			font-size: 36px;
		}
	}

	@media (max-width: 768px) {
		.error-icon {
			width: 13rem;
			height: 13rem;
		}

		.error-title {
			font-size: 32px;
		}
		
		.error-text {
			font-size: 18px;
			text-align: center;
		}
	}
	
	@media (max-width: 480px) {
		.error-icon {
			width: 10rem;
			height: 10rem;
		}

		.error-title {
			font-size: 24px;
		}
		
		.error-text {
			font-size: 16px;
			text-align: center;
		}
	}
`

export default ErrorPage;