import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import products from '../../../data/product_data';
import ProductModal from '../../../components/ProductModal';

function ProductDetail() {
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
			<p className='section-hierarchy'>{"Главная > "}{singleProduct.type}{" > "}{singleProduct.category}{" > "}{singleProduct.name}</p>

			<ProductModal product={singleProduct} />

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
	
	.about-content {
		display: flex;
		margin: 90px 0 0 100px;
	}
	
	.product-characteristics,
	.product-id {
		width: 280px;
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
`

export default ProductDetail;