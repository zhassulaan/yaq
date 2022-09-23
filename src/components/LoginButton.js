import React from 'react';
import styled from 'styled-components';

function LoginButton({text}) {
  return (
	  <Button>
      <p className='button-text'>{text}</p>
    </Button>
  )
}

const Button = styled.nav`
  width: 100%;
  height: 3.75rem;
  background: var(--clr-primary-1);
  display: flex;
  justify-content: center;
  align-items: center;

  .button-text {
    color: var(--clr-white);
    font-size: 5vw;
    font-weight: 500;
  }
`

export default LoginButton;