import React from 'react';
import styled from 'styled-components';

function ProductItem({ product }) {
  	return (
	 	<Wrapper>
			<img src={ product.image } alt="product image" className='product-image'/>
			
			<div className='product-info'>
				<p className='product-title'>{ product.item } { product.brands } { product.name }</p>
				
				<div className='product-color'>
					<p><span>Цвет:</span> { product.color }</p>
				</div>
				
				<div className='product-size'>
					<p><span>Размер:</span> { product.size }</p>
				</div>					

				<div className='product-price'>
					<h1>{ product.price } { product.currency }</h1>
				</div>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	display: flex;
	width: 100%;
	padding-top: 40px;
	
	.product-image {
		width: 150px;
		height: 150px;
		margin-right: 40px;
	}

	.product-title {
		font-size: 18px;
		font-weight: 400;
		margin-top: 10px;
	}

	.product-color,
	.product-size {
		display: flex;
		font-size: 18px;
		font-weight: 300;
	}
	
	.product-color span,
	.product-size span {
		font-weight: 500;
	}
	
	.product-price {
		margin-top: 10px;
	}

	.product-price h1 {
		font-size: 26px;
		font-weight: 700;
	}
`

export default ProductItem;