import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import Select from '../components/Select';
import AddButton from '../components/AddButton';
import delivery from '../assets/delivery.svg';
import ImageCarousel from './ImageCarousel';

function ProductModal({ product }) {
	const colorOptions = product.colors;
	const sizeOptions = product.sizes;

	const settings = {
		infinite: true,
  		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const [selectedColor, setSelectedColor] = useState([null]);
	const [selectedSize, setSelectedSize] = useState([null]);

	product.color = selectedColor.label;
	product.size = selectedSize.label;

  	return (
		<Wrapper>
			<div className='left-box'>
				<div className='image-content'>
					<div className='mini-boxes'>
						<div className='mini-image-box'>{(product.image === null) ? <p>Фото</p> : <img src={product.image} alt='product image'/>}</div>
						<div className='mini-image-box'>{(product.image2 === null) ? <p>Фото</p> : <img src={product.image2} alt='product image'/>}</div>
						<div className='mini-image-box'>{(product.image3 === null) ? <p>Фото</p> : <img src={product.image3} alt='product image'/>}</div>
						<div className='mini-image-box'>{(product.image4 === null) ? <p>Фото</p> : <img src={product.image4} alt='product image'/>}</div>
						<div className='mini-image-box'>{(product.image5 === null) ? <p>Фото</p> : <img src={product.image5} alt='product image'/>}</div>
					</div>
					
					<div className='image-box'>
						{(() => {
							if (product.sale === 'Новинка') { 
								return (<h5 className='product-sale title'>{product.sale}</h5>)
							} else if (product.sale === null) {
								return (<h5 className='title'></h5>)
							} else {
								return (<h5 className='product-sale title'>-{product.sale}%</h5>)
							}
						})()}
						
						<img src={product.image} alt="product image"/>
						{/* <ImageCarousel images={product.images}/> */}
					</div>
				</div>
			</div>

			<div className="right-box">
				<p className="product-name">{product.item} {product.brands} {product.name}</p>
				<p className="product-price">
					{(product.sale > 0) ?
						product.price + product.currency
						:
						""
					}
				</p>
				<p className="product-sale-price">
					{(product.sale > 0) ?
						product.price / 100 * (100 - product.sale) + " " + product.currency
						:
						product.price + product.currency
					}
				</p>
				<div className="product-color">
					<p>Цвет:</p>
					<Select options={colorOptions} placeholder={"Выберите цвет"} selectedOption={selectedColor} setSelectedOption={setSelectedColor}/>
				</div>
				<div className="product-size">
					<p>Размер:</p>
					<Select options={sizeOptions} placeholder={"Выберите размер"} selectedOption={selectedSize} setSelectedOption={setSelectedSize}/>
				</div>

				<div className="product-button">
					<AddButton product={product} />
				</div>

				<div className="product-delivery">
					<div>
						<img src={delivery} alt="delivery icon" />
						<p>Бесплатная доставка по Алматы</p>
					</div>
					<div>
						<img src={delivery} alt="delivery icon" />
						<Link to="/delivery_payment">Подробнее о доставке и оплате</Link>
					</div>
				</div>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between; 

	.left-box {
		width: 480px;
		margin: 40px 0 0 100px;
	}

	.image-content {
		display: flex;
		justify-content: space-between;
	}

	.mini-image-box {
		width: 60px;
		height: 70px;
		background: var(--clr-primary-5);
		margin-bottom: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.mini-image-box p {
		font-size: 16px;
		font-weight: 400;
	}

	.mini-image-box img {
		height: 100%;
		background: var(--clr-white);
		overflow: hidden;
	}

	.image-box {
		width: 380px;
		height: 480px;
	}

	.product-sale {
		position: absolute;
		width: 80px;
		height: 40px;
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-white);
		background-color: var(--clr-primary-1);
		padding: 0.4% 0;
	}

	.image-box img {
		width: 100%;
		padding: 15.8% 0;
	}

	.right-box {
		width: 530px;
		margin-top: 30px;
	}

		.product-name {
		font-size: 20px;
		font-weight: 400;
	}
	
	.product-price {
		font-size: 20px;
		font-weight: 700;
		color: var(--clr-primary-4);
		text-decoration-line: line-through;
		margin-top: 10px;
	}
	
	.product-sale-price {
		font-size: 26px;
		font-weight: 700;
		margin-bottom: 20px;
	}

	.product-color,
	.product-size {
		width: 280px;
		font-size: 18px;
		font-weight: 500;
		margin-bottom: 25px;
	}
	
	.product-button {
		padding-top: 10px;
	}

	.product-color p,
	.product-size p {
		margin-bottom: 5px;
	}

	.product-delivery {
		width: 280px;
		height: 80px;
		background: var(--clr-primary-6);
		margin-top: 30px;
		padding: 10px 10px 15px 15px;
	}
	
	.product-delivery div {
		display: flex;
		gap: 15px;
		padding-bottom: 14px
	}

	.product-delivery p,
	.product-delivery a {
		font-size: 14px;
		font-weight: 400;
	}
	
	.product-delivery a {
		text-decoration-line: underline;
	}
`

export default ProductModal;