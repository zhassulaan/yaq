import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductModal from '../../../components/ProductModal';
import products from '../../../data/product_data';

function PopUp() {
	const [singleProduct, setSingleProduct] = useState({})
	const { id } = useParams();
	
	const findProduct = () => {
      setSingleProduct(products.find((product) => String(product.id) === id)) ;
   }

	useEffect(() => {
		findProduct()
  	}, [id])

  	return (
	 	<Wrapper>
			<div className="popup-container">
				<ProductModal product={singleProduct} id={1} />
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	position: fixed;
	background: #00000080;
	padding: 6.75% 13.125vw 9.84375%;

	.popup-container {
		height: 41.25vw;
		background: var(--clr-white);
		padding: 3.125vw 0 5.625vw;
	}

	@media (max-width: 480px) {
		position: static;
		padding: 6.5625% 5.556vw 9.84375%;
		background: var(--clr-primary-6);

		.popup-container {
			height: 100%;
			background: transparent;
		}
	}
`

export default PopUp;