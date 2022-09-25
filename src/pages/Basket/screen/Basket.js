import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../component/ProductItem';
import { CartState } from '../../../context/Context';
import ErrorPage from '../../ErrorPage/screen/ErrorPage';
import Button from '../../../components/Button';
import close from '../assets/close.svg';

function Basket() {
	const {
		state: { cart },
		dispatch
	} = CartState();

	const [total, setTotal] = useState();

	useEffect(() => {
		const totalArray = cart.map((item) =>
			(item.quantity * item.product.price)
		)
		setTotal(totalArray.reduce((acc, curr) => acc + Number(curr), 0))
	}, [cart])

  	return (
	 	<Wrapper>
			{cart.length > 0 ? (
            <div className='basket-box block'>
					{cart.map((item) => (
						<ProductItem product={ item.product } quantity={ item.quantity }/>
					))}

					<div className="summary">
						<h1 className='product-total-price'>ИТОГОВАЯ СУММА: <span>{ total } KZT</span></h1>
							
						<a href={`/order`} className='product-button-link'>
							<Button text={"Оформить заказ"}/>
						</a>
					</div>
				</div>
         ) : (
				<div className='basket-box none'>
					<ErrorPage title={"КОРЗИНА ПУСТА"} text={"Самое время её пополнить!"}/>
					
					<a href={`/products/clothes`} className='button-link'>
						<Button text={"Перейти в магазин"}/>
					</a>
				</div>
			)}

			<a href="/">
				<img src={close} alt="close button" className='close-button'/>
			</a>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	background: #00000080;
	padding: 8.75rem 0 21.25rem;
	display: flex;
	
	.basket-box {
		background: var(--clr-white);
		margin-left: 13.125vw;
	}
	
	.basket-box.block {
		padding: 90px 63px 80px 50px;
	}
	
	.summary {
		position: relative;
		display: flex;
		justify-content: space-between;
		padding-top: 70px;
	}

	.summary:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: var(--clr-primary-5);
	}

	.product-total-price {
		font-size: 26px;
		font-weight: 700;
		margin-top: 10px;
	}
	
	.product-total-price span {
		color: var(--clr-primary-2);
	}

	.button-container {
		width: 320px;
	}
	
	.block .button-text {
		font-size: 26px;
		font-weight: 400;
	}

	.basket-box.none {
		padding: 10px 0 160px;
	}

	.error-text {
		padding-bottom:  0;
	}
	
	.none .button-container {
		height: 50px;
		margin: 30px auto 0;
	}

	.none .button-text {
		font-size: 20px;
		font-weight: 500;
	}

	.close-button {
		margin-left: 45px;
	}
`

export default Basket;