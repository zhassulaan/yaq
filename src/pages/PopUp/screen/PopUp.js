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
				<ProductModal product={singleProduct} />
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	background: #00000080;
	padding: 8.75rem 13.125vw 13.125rem;

	.popup-container {
		background: var(--clr-white);
		padding: 90px 0 50px;
	}
`

export default PopUp;