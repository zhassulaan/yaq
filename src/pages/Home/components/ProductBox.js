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
							return (<h5 className='product-sale button'>{product.sale}</h5>)
						} else if (product.sale === null) {
							return (<h5 className='button'></h5>)
						} else {
							return (<h5 className='product-sale button'>-{product.sale}%</h5>)
						}
					})()}
					<img src={product.saved ? greenHeart : heart} alt="saved button" className='saved-icon'/>
				</div>

				<div className="box-body">
					<img src={product.image} alt={product.name} className='product-image'/>

					<div className="brand-name">{product.brands}</div>
					<div className="item-name">{product.item} {product.brands} {product.name}</div>
				</div>

				<div className="box-footer">
					<div className="price-number">{product.price} {product.currency}</div>

					<div className="product-btns">
						<a href={`/popup/${product.id}`}>
							<button className='button product-button green-btn' >В корзину</button>
						</a>

						<a href={`/products/${product.id}`}>
							<button className='button product-button white-btn'>Подробнее</button>
						</a>
					</div>
				</div>
			</div>
		</BoxContainer>
	);
}

const BoxContainer = styled.nav`
	.box-content {
		width: 17.5rem;
		height: 28.125rem;
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
		height: 2.5rem;
	}
	
	.product-sale {
		width: 28.78%;
		height: 100%;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-white);
		background-color: var(--clr-primary-1);
		padding: 2% 0;
	}

	.saved-icon {
		margin-right: 0.625rem;
	}

	.box-body {
		padding-top: 2.5rem;
	}

	.product-image {
		width: 11.875rem;
		height: 11.25rem;
		margin: 0 auto;
	}

	.brand-name {
		position: relative;
		font-size: 16px;
		font-weight: 700;
		color: var(--clr-primary-3);
		margin: 17px 1.25rem 0;
		padding-bottom: 10px;
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
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		margin: 15px 1.25rem 7px;
	}
	
	.box-footer {
		width: 100%;
		height: 6.875rem;
		position: absolute;
		bottom: 0;
	}
	
	.price-number {
		font-size: 26px;
		font-weight: 700;
		line-height: 2.5rem;
		text-align: center;
		margin-bottom: 1.25rem;
	}
	
	.product-button {
		width: 50%;
		height: 3.125rem;
		font-size: 18px;
		font-weight: 400;
		border: none;
	}

	.green-btn {
		color: var(--clr-white);
		background: var(--clr-primary-1);
	}

	.white-btn {
		background: var(--clr-white);
	}

	@media (max-width: 1024px) {
		width: 9.6875rem;
		height: 14.375rem;
		border: 1px solid var(--clr-white);
		border-radius: 7px;
		margin: 0 1.465vw;
		
		.box-header {
			top: 0.625rem;
			height: 1.25rem;
		}

		.product-sale {
			width: 3.125rem;
			font-size: 12px;
			padding: 0;
		}

		.saved-icon {
			width: 0.938rem;
			margin-right: 9px;
		}

		.box-body {
			height: calc(100% - 38px);
			padding-top: 0.625rem;
		}

		.product-image {
			width: 7.5rem;
			height: 8.125rem;
		}

		.brand-name {
			display: none;
		}

		.item-name {
			font-size: 12px;
			margin: 0.625rem 7px 0 8px;
		}

		.box-footer {
			height: 100%;
			position: static;
		}
		
		.price-number {
			position: relative;
			font-size: 14px;
			margin: 0 7px 0 8px;
		}
		
		.price-number:before {
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			top: 0;
			left: 0;
			background: var(--clr-primary-3);
		}

		.product-button {
			display: none;
		}
	}

	@media (max-width: 768px) {
		margin: 0 5px;
	}
`

export default ProductBox;