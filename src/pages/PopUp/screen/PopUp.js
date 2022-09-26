import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
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
		  	{/* onClick={() => 
				dispatch({
					type: "ADD_TO_CART",
					payload: product
				})
		 	} */}
			<div className="popup-container">
				<p>{singleProduct.id}</p>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	background: #00000080;
	padding: 8.75rem 0 13.125rem;
	display: flex;

	.popup-container {
		background: var(--clr-white);
		margin-left: 13.125vw;
	}

	.left-box {
		width: 480px;
		margin: 40px 0 0 100px;
	}
`

export default PopUp;