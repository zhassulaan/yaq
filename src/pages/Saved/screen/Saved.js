import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserState } from '../../../context/UserContext';
import LoginButton from '../../../components/Button';

function Saved() {
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
			<h1 className='title section-title'>СОХРАНЕННЫЕ ТОВАРЫ</h1>
			
			<div className="unauthorized">
				<p className='section-text'>Войдите в свой аккаунт чтобы просматривать сохранённые товары</p>
				<div className='button'>
					<LoginButton text="Войти"/>
				</div>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 9.375rem;

	.section-title {
		font-size: 80px;
		font-weight: 500;
		margin-bottom: 60px;
	}

	.unauthorized {
		width: 380px;
		margin: 6.875rem auto 5rem;
	}

	.section-text {
		font-size: 20px;
		font-weight: 400;
		text-align: center;
		margin-bottom: 10px;
	}

	.button-text {
		font-size: 26px;
	}

	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 9.375rem;
	}
	
	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
		}

		.unauthorized {
			width: 320px;
		}
	}

	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
		}

		.section-text {
			font-size: 18px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}

		.unauthorized {
			width: 290px;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
		}

		.section-text {
			font-size: 16px;
		}
	}

	@media (max-width: 530px) {
		.section-title {
			font-size: 40px;
		}
		
		.section-text {
			font-size: 14px;
		}

		.unauthorized {
			width: 220px;
		}
	}
`

export default Saved;