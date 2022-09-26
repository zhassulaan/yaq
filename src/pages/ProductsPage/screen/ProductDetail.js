import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import Select from '../../../components/Select';
import AddButton from '../../Home/components/AddButton';
import products from '../../../data/product_data';
import delivery from '../assets/delivery.svg';

function ProductDetail() {
	const [singleProduct, setSingleProduct] = useState({})
	const { id } = useParams();
	
	const findProduct = () => {
      setSingleProduct(products.find((product) => String(product.id) === id)) ;
   }

	useEffect(() => {
		findProduct()
  	}, [id])
	
	const colorOptions = singleProduct.colors;
	const sizeOptions = singleProduct.sizes;

	const settings = {
		infinite: true,
  		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

  	return (
	 	<Wrapper>
			<p className='section-hierarchy'>{"Главная > "}{singleProduct.type}{" > "}{singleProduct.category}{" > "}{singleProduct.name}</p>

			<div className='section-container'>
				<div className='section-box left-box'>
					<div className='image-content'>
						<div className='mini-boxes'>
							<div className='mini-image-box'>{(singleProduct.image === null) ? <p>Фото</p> : <img src={singleProduct.image} alt='product image'/>}</div>
							<div className='mini-image-box'>{(singleProduct.image2 === null) ? <p>Фото</p> : <img src={singleProduct.image2} alt='product image'/>}</div>
							<div className='mini-image-box'>{(singleProduct.image3 === null) ? <p>Фото</p> : <img src={singleProduct.image3} alt='product image'/>}</div>
							<div className='mini-image-box'>{(singleProduct.image4 === null) ? <p>Фото</p> : <img src={singleProduct.image4} alt='product image'/>}</div>
							<div className='mini-image-box'>{(singleProduct.image5 === null) ? <p>Фото</p> : <img src={singleProduct.image5} alt='product image'/>}</div>
						</div>
						
						<div className='image-box'>
							{(() => {
								if (singleProduct.sale === 'Новинка') { 
									return (<h5 className='product-sale title'>{singleProduct.sale}</h5>)
								} else if (singleProduct.sale === null) {
									return (<h5 className='title'></h5>)
								} else {
									return (<h5 className='product-sale title'>-{singleProduct.sale}%</h5>)
								}
							})()}
							
							<img src={singleProduct.image} alt="product image"/>

							{/* <Slider {...settings}>
								{singleProduct.images.map(image => {
									return(
										<img src={image.label} alt="product image"/>
										);
									})}
							</Slider> */}
						</div>
					</div>

					<div className='about-content'>
						<div className='product-characteristics'>
							<h2 className='about-title title'>ХАРАКТЕРИСТИКИ</h2>
							<ul>
								<li className='about-item'>{singleProduct.material}</li>						
								<li className='about-item'>{singleProduct.brands}</li>						
								<li className='about-item'>{singleProduct.characteristic1}</li>
								<li className='about-item'>{singleProduct.characteristic2}</li>		
							</ul>				
						</div>

						<div className='product-id'>
							<h2 className='about-title title'>КОД ТОВАРА</h2>
							<p className='about-item'>{singleProduct.id}</p>
						</div>
					</div>
				</div>

				<div className="section-box right-box">
					<p className="product-name">{singleProduct.item} {singleProduct.brands} {singleProduct.name}</p>
					<p className="product-price">
						{(singleProduct.sale > 0) ?
							singleProduct.price + singleProduct.currency
							:
							""
						}
					</p>
					<p className="product-sale-price">
						{(singleProduct.sale > 0) ?
							singleProduct.price / 100 * (100 - singleProduct.sale) + " " + singleProduct.currency
							:
							singleProduct.price + singleProduct.currency
						}
					</p>
					<div className="product-color">
						<p>Цвет:</p>
						<Select options={colorOptions} placeholder={"Выберите цвет"}/>
					</div>
					<div className="product-size">
						<p>Размер:</p>
						<Select options={sizeOptions} placeholder={"Выберите размер"}/>
					</div>

					<div className="product-button">
						<AddButton/>
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
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 1.875rem 13.125vw 11.25rem;

	.section-hierarchy {
		font-size: 16px;
		font-weight: 500;
		color: var(--clr-primary-4);
	}
	
	.section-container {
		display: flex;
		justify-content: space-between;
	}

	.left-box {
		width: 480px;
		margin: 40px 0 0 100px;
	}

	.image-content,
	.about-content {
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
		padding: 15% 0;
	}

	.about-content {
		margin-top: 90px;
	}
	
	.about-title {
		font-size: 22px;
		font-weight: 500;
		color: var(--clr-primary-4);
	}
	
	.about-item {
		font-size: 18px;
		font-weight: 400;
		margin: 10px 0 13.5px;
		list-style: inside;
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

export default ProductDetail;