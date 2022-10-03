import React from 'react';
import styled from 'styled-components';

function LoginButton() {
	return (
	 	<Wrapper>
			<button className='button'>
				Войти
			</button>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	.button {
		width: 200px;
		height: 100%;
		font-size: 22px;
		font-weight: 400;
		color: var(--clr-white);
		background: var(--clr-primary-1);
		border: none;
	}
`

export default LoginButton;