import React, { useEffect } from 'react';
import styled from 'styled-components';
import { UserState } from '../../../context/UserContext';
import Button from '../../../components/Button';
import ProductBox from '../../Home/components/ProductBox';

function Saved() {
	const {
		user,
		handleOpenLogin,
		showLogin,
		showSignup
	} = UserState();
	
	useEffect(() => {
		if (showLogin || showSignup) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [showLogin, showSignup])

  	return (
		<Wrapper>
			<h1 className='title section-title'>СОХРАНЕННЫЕ ТОВАРЫ</h1>
			
			{user.auth === true ?
				!(user.saved.length === 0) ?
					<div className='products-content'>
						{ user.saved.map((item) => {
							console.log(item.product);
							return(
								<div className="product">
									<ProductBox key={ item.product.id } product={ item.product }/>
								</div>
							);
						}) }
					</div>
						:
					<div className="authorized">
						<p className='section-text'>Вы еще не добавили товары. Нажмите на сердечки при выборе товара, чтобы он попал сюда!</p>
						<div className='button'>
							<a href='/products'>
								<Button text="Перейти в магазин"/>
							</a>
						</div>
					</div>
				
					
					:
				<div className="unauthorized">
					<p className='section-text'>Войдите в свой аккаунт чтобы просматривать сохранённые товары</p>
					<div className='button' onClick={handleOpenLogin}>
						<Button text="Войти"/>
					</div>
				</div>
			}
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 5rem;

	.section-title {
		font-size: 80px;
		font-weight: 500;
		margin-bottom: 3.75rem;
	}

	.products-content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: max-content;
	}

	.product {
		margin: 0 1.25vw 1.25vw 0;
	}

	.box-content {
		width: 17.5vw;
		height: 28.125vw;
		border: none;
	}

	.product:hover .box-content {
		border: 1px solid var(--clr-primary-3);
	}
	
	.box-header {
		width: 100%;
		height: 8.93%;
	}
	
	.product-sale {
		width: 28.778%;
		height: 100%;
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
		margin: 0 1.5625vw;
		margin-bottom: -6px;
		padding: 0;
	}

	.brand-name {
		line-height: 1.25vw;
		padding: 8.404% 0 4.202%;
	}

	.item-name {
		height: 3.125vw;
		margin-top: 8.405%;
	}
	
	.price-number {
		line-height: 2.5vw;
	}

	.product-btns {
		margin-top: 1.25vw;
	}
	
	.product-button {
		display: none;
		width: 50%;
		height: 3vw;
	}
	
	.product:hover .product-btns {
		display: flex;
	}

	.product:hover .product-button {
		width: 8.6875vw;
		display: block;
	}

	.green-btn:hover {
		background: var(--clr-primary-2);
	}

	.authorized {
		width: 500px;
	}

	.unauthorized {
		width: 380px;
	}
	
	.authorized,
	.unauthorized {
		margin: 6.875rem auto 9.375rem;
	}

	.section-text {
		font-size: 20px;
		font-weight: 400;
		line-height: 2.1875rem;
		text-align: center;
		margin-bottom: 0.625rem;
	}

	.authorized .button,
	.unauthorized .button {
		width: 380px;
		height: 3.75rem;
		font-size: 26px;
		margin: 0 auto;
	}

	@media (max-width: 1100px) {
		padding: 1.875rem 9vw 9.375rem;
	}
	
	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
			margin-bottom: 3.4375rem;
		}

		.unauthorized {
			width: 320px;
		}
	}

	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
			margin-bottom: 3.125rem;
		}

		.section-text {
			font-size: 18px;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
			margin-bottom: 2.5rem;
		}
		
		.product-sale, 
		.product-button p,
		.brand-name,
		.item-name {
			font-size: 8px;
		}
		
		.price-number {
			font-size: 13px;
		}
		
		.unauthorized {
			width: 290px;
		}
	}
	
	@media (max-width: 700px) {
		.section-title {
			margin-bottom: 2.1875rem;
		}

		.product-sale, 
		.product-button p,
		.brand-name,
		.item-name {
			font-size: 7.5px;
		}

		.price-number {
			font-size: 12px;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
			margin-bottom: 1.875rem;
		}
		
		.product-sale, 
		.product-button p,
		.brand-name,
		.item-name {
			font-size: 6.5px;
		}

		.price-number {
			font-size: 11px;
		}

		.section-text {
			font-size: 16px;
		}
	}

	@media (max-width: 530px) {
		.section-title {
			font-size: 40px;
			margin-bottom: 1.5625rem;
		}

		.product-sale, 
		.product-button p,
		.brand-name,
		.item-name {
			font-size: 5.25px;
		}

		.price-number {
			font-size: 10px;
		}
		
		.section-text {
			font-size: 14px;
		}

		.unauthorized {
			width: 220px;
		}
	}
`

export default Saved;