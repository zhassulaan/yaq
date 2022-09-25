import React from 'react';
import styled from 'styled-components';
import error from '../assets/error.svg';

function ErrorPage({ title, text }) {
 	return (
	 	<Wrapper>
			<img src={error} alt="error smile" />
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
	padding: 100px 0 0;

	.error-title {
		font-size: 40px;
		font-weight: 500;
		margin-top: 30px;
	}

	.error-text {
		font-size: 20px;
		font-weight: 400;
		margin-top: 20px;
		padding-bottom: 230px;
	}
`

export default ErrorPage;