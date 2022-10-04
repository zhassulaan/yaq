import React from 'react';
import styled from 'styled-components';
import { CartState } from '../../../context/Context';
import heart from '../assets/heart.svg';
import greenHeart from '../assets/green-heart.svg';

const ProductBox = ({ product }) => {
	const {
		state: { cart },
		dispatch
	} = CartState();

	return(
		<BoxContainer key={product.id}>
			<div className="box-content">
				<div className="box-header">
					{(() => {
						if (product.sale === 'Новинка') { 
							return (<button className='product-sale button'>{product.sale}</button>)
						} else if (product.sale === null) {
							return (<h1 className='button'></h1>)
						} else {
							return (<button className='product-sale button'>-{product.sale}%</button>)
						}
					})()}
					<img src={product.saved ? greenHeart : heart} alt="saved button" className='button saved-icon'/>
				</div>

				<div className="box-body">
					<div className="body-text">
						<img src={product.image} alt={product.name} className='product-image'/>

						<div className="brand-name">{product.brands}</div>
						<div className="item-name">{product.item} {product.brands} {product.name}</div>

						<div className="price-number">{product.price} {product.currency}</div>
					</div>

					<div className="product-btns">
						<a href={`/popup/${product.id}`}>
							<button className='button product-button green-btn'><p>В корзину</p></button>
						</a>

						<a href={`/products/${product.id}`}>
							<button className='button product-button white-btn'><p>Подробнее</p></button>
						</a>
					</div>
				</div>
			</div>
		</BoxContainer>
	);
}

const BoxContainer = styled.nav`
	.box-content {
		width: 17.5vw;
		height: 28.125vw;
		position: relative;
		background-color: var(--clr-white);
		border: 1px solid var(--clr-primary-3);
	}
	
	.box-header {
		position: absolute;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 8.93%;
	}
	
	.product-sale {
		width: 28.778%;
		height: 100%;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-white);
		background-color: var(--clr-primary-1);
		border: none;
	}

	.saved-icon {
		margin-right: 0.625vw;
	}

	.box-body {
		height: 75.894%;
		padding-top: 14.39%;
	}

	.body-text {
		padding: 0 7.197%;
	}

	.product-image {
		width: 79.835%;
		height: 60%;
		margin: 0 auto;
		padding: 0;
	}

	.brand-name {
		line-height: 1.25vw;
		position: relative;
		font-size: 16px;
		font-weight: 700;
		color: var(--clr-primary-3);
		padding: 8.404% 0 4.202%;
	}

	.brand-name:after {
		content: "";
      position: absolute;
		bottom: 0;
      left: 0;
		width: 100%;
      height: 1px;
      background: var(--clr-primary-3);
	}

	.item-name {
		height: 3.125vw;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		margin-top: 8.405%;
	}
	
	.price-number {
		line-height: 2.5vw;
		font-size: 26px;
		font-weight: 700;
		text-align: center;
	}

	.product-btns {
		margin-top: 1.25vw;
	}
	
	.product-button {
		width: 50%;
		height: 3vw;
		border: none;
	}
	
	.product-button p {
		font-size: 18px;
		font-weight: 400;
	}

	.green-btn {
		color: var(--clr-white);
		background: var(--clr-primary-1);
	}

	.white-btn {
		background: var(--clr-white);
	}

	@media (max-width: 1500px) {
		.product-sale, 
		.product-button p {
			font-size: 17px;
		}

		.price-number {
			font-size: 25px;
		}

		.brand-name,
		.item-name {
			font-size: 15px;
		}
	}
	
	@media (max-width: 1400px) {
		.price-number {
			font-size: 24px;
		}

		.brand-name,
		.item-name {
			font-size: 14px;
		}
	}


	@media (max-width: 1300px) {
		.product-sale, 
		.product-button p {
			font-size: 15px;
		}

		.price-number {
			font-size: 22px;
		}

		.brand-name,
		.item-name {
			font-size: 13px;
		}
	}
	
	@media (max-width: 1200px) {
		.product-sale, 
		.product-button p {
			font-size: 14px;
		}

		.saved-icon {
			width: 8%;
		}

		.price-number {
			font-size: 19px;
		}

		.brand-name,
		.item-name {
			font-size: 12px;
		}
	}

	@media (max-width: 1100px) {
		.product-sale, 
		.product-button p {
			font-size: 13px;
		}

		.price-number {
			font-size: 18px;
		}

		.brand-name,
		.item-name {
			font-size: 11px;
		}
	}

	@media (max-width: 1024px) {
		.brand-name,
		.item-name {
			font-size: 10px;
		}
	}
	
	@media (max-width: 992px) {
		.product-sale, 
		.product-button p {
			font-size: 11px;
		}
		
		.price-number {
			font-size: 16px;
		}

		.brand-name,
		.item-name {
			font-size: 9px;
		}
	}

	@media (max-width: 840px) {
		.brand-name,
		.item-name {
			font-size: 8px;
		}
	}

	@media (max-width: 768px) {
		.box-content {
			width: 8.75rem;
			height: 14.0625rem;
		}

		.box-header {
			height: 1.25rem;
		}

		.product-sale, 
		.product-button p {
			font-size: 9px;
		}

		.saved-icon {
			width: 0.625rem;
			margin-right: 0.3125rem;
		}

		.box-body {
			height: 14.0625rem;
			padding-top: 1.25rem;
		}
		
		.body-text {
			padding: 0 0.625rem;
		}

		.product-image {
			width: 5.9375rem;
			height: 5.625rem;
			margin: 0 auto;
		}
		
		.brand-name {
			line-height: 0.625rem;
			font-size: 9px;
			padding: 0.625rem 0 0.3125rem;
		}

		.item-name {
			height: 1.5625rem;
			font-size: 9px;
			margin-top: 0.625rem;
		}

		.price-number {
			line-height: 1.25rem;
			font-size: 13px;
		}

		.product-btns {
			margin-top: 0.475rem;
		}
		
		.product-button {
			height: 1.5625rem;
		}
	}

	@media (max-width: 480px) {
		.box-content {
			width: 43.056vw;
			height: 66.667vw;
			border: 1px solid var(--clr-white);
			border-radius: 7px;
		}
		
		.box-header {
			top: 2.778vw;
			height: 5.556vw;
		}

		.product-sale {
			width: 13.889vw;
			font-size: 12px;
			padding: 0;
		}

		.saved-icon {
			width: 4.167vw;
			margin-right: 2.5vw;
		}

		.box-body {
			height: 100%;
			padding-top:  2.5vw;
		}

		.body-text {
			padding: 0 1.944vw 0 2.222vw;
		}

		.product-image {
			width: 33.333vw;
			height: 36.111vw;
			margin: 0 2.778vw;
		}

		.brand-name {
			display: none;
		}

		.item-name {
			height: 13.889vw;
			font-size: 13px;
			margin-top: 2.778vw;
			padding-bottom: 0.833vw;
		}

		.price-number {
			position: relative;
			font-size: 18px;
			padding-top: 1.944vw;
		}
		
		.price-number:before {
			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			top: 0;
			left: 0;
			background: var(--clr-primary-3);
		}

		.product-button {
			display: none;
		}
	}

	@media (max-width: 420px) {
		.item-name {
			font-size: 12px;
		}

		.price-number {
			font-size: 16px;
		}
	}
	
	@media (max-width: 380px) {
		.price-number {
			font-size: 14px;
		}
	}
`

export default ProductBox;