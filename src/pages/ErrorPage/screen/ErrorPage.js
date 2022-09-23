import React from 'react';
import styled from 'styled-components';
import error from '../assets/error.svg';

function ErrorPage() {
 	return (
	 	<Wrapper>
			<img src={error} alt="" />
			<h1 className='title'>НИЧЕГО НЕ НАЙДЕНО</h1>
			<p>Попробуйте сбросить фильтры или обновить страницу</p>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 100px 0 20%;

	h1 {
		font-size: 40px;
		font-weight: 500;
		margin-top: 30px;
	}

	p {
		font-size: 20px;
		font-weight: 400;
		margin-top: 20px;
	}
`

export default ErrorPage;