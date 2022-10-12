import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartState } from '../context/Context';

function AddButton({ product, color, size, bool }) {
	const {
		state: { cart },
		dispatch
	} = CartState();
	product.color = color;
	product.size = size;

	return (
	 	<Wrapper>
			<Link>
				<button className='button'
					onClick={() => 
						dispatch({
							type: "ADD_TO_CART",
							payload: product,
						})
					}
					disabled={bool}
				>
					В корзину
				</button>
			</Link>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	.button {
		width: 17.5rem;
		height: 3.75rem;
		font-size: 22px;
		font-weight: 500;
		color: var(--clr-white);
		background: var(--clr-primary-1);
		border: none;
	}
`

export default AddButton;