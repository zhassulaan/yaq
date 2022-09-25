import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterBox from '../component/FilterBox';
import ProductBox from '../../Home/components/ProductBox';
import Error from '../../ErrorPage/screen/ErrorPage';
import { filterGender, filterColors, filterSizes, filterBrands } from '../../../data/filter';
import { CartState } from '../../../context/Context';

function ProductPage() {
	const { state: 
		{ products } 
	} = CartState();
	
	const [selectedPrice, setSelectedPrice] = useState([100, 1000000]);
	const [gender, setGender] = useState(filterGender);
	const [colors, setColors] = useState(filterColors);
	const [sizes, setSizes] = useState(filterSizes);
	const [brands, setBrands] = useState(filterBrands);

	const [list, setList] = useState(products);
	const [resultsFound, setResultsFound] = useState(true);

	const handleChangePrice = (event, value) => {
		setSelectedPrice(value);
  	};

	const handleChangeChecked = (id) => {
		const genderStateList = gender;
		const changeCheckedGender = genderStateList.map((item) =>
		  	item.id === id ? { ...item, checked: !item.checked } : item
		);
		setGender(changeCheckedGender);
	};

	const handleChangeCheckedColors = (id) => {
		const colorsStateList = colors;
		const changeCheckedColors = colorsStateList.map((item) =>
		  	item.id === id ? { ...item, checked: !item.checked } : item
		);
		setColors(changeCheckedColors);
	};

	const handleChangeCheckedSizes = (id) => {
		const sizesStateList = sizes;
		const changeCheckedSizes = sizesStateList.map((item) =>
		  	item.id === id ? { ...item, checked: !item.checked } : item
		);
		setSizes(changeCheckedSizes);
	};

	const handleChangeCheckedBrands = (id) => {
		const brandsStateList = brands;
		const changeCheckedBrands = brandsStateList.map((item) =>
		  	item.id === id ? { ...item, checked: !item.checked } : item
		);
		setBrands(changeCheckedBrands);
	};

  	const applyFilters = () => {
    	let updatedList = products;
		let clr = [];
		products.map((item, index) => {
			clr[index] = item.colors;
		});

		// Price Filter
		const minPrice = selectedPrice[0];
		const maxPrice = selectedPrice[1];

		updatedList = updatedList.filter(
			(item) => item.price >= minPrice && item.price <= maxPrice
		);

		// Gender Filter
		const genderChecked = gender
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (genderChecked.length) {
			updatedList = updatedList.filter((item) =>
				genderChecked.includes(item.gender)
			);
		}

		// Colors Filter
		const colorsChecked = colors
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (colorsChecked.length) {
			clr = clr.filter((item) =>
				colorsChecked.includes(item.colors)
			);
		}

		// Sizes Filter
		const sizesChecked = sizes
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (sizesChecked.length) {
			updatedList = updatedList.filter((item) =>
				sizesChecked.includes(item.sizes)
			);
		}

		// Brands Filter
		const brandsChecked = brands
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (brandsChecked.length) {
			updatedList = updatedList.filter((item) =>
				brandsChecked.includes(item.brands)
			);
		}

		setList(updatedList);

		!updatedList.length ? setResultsFound(false) : setResultsFound(true);
	};

 	useEffect(() => {
    	applyFilters();
  	}, [selectedPrice, gender, colors, sizes, brands]);

  	return (
	 	<Wrapper>
			<p>{'Главная > Одежда > Мужские куртки'}</p>
			<h1 className='title section-title'>ВСЕ ТОВАРЫ</h1>
			<p className='section-text'>Найдено 110 товаров</p>

			<div className='products-section'>
				<FilterBox
					selectedPrice={selectedPrice}
					changePrice={handleChangePrice}
					gender={gender}
					changeChecked={handleChangeChecked}
					colors={colors}
					changeCheckedColors={handleChangeCheckedColors}
					sizes={sizes}
					changeCheckedSizes={handleChangeCheckedSizes}
					brands={brands}
					changeCheckedBrands={handleChangeCheckedBrands}
				/>

				{ (list.length == 0) ?
					<Error title={"НИЧЕГО НЕ НАЙДЕНО"} text={"Попробуйте сбросить фильтры или обновить страницу"}/>
					:
					<div className="products-content">
						{ list.map((item) => {
							return(
								<div className="product">
									<ProductBox key={ item.id } product={ item }/>
								</div>
							);
						}) }
					</div>
				}
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	padding: 3.75rem 13.125vw 9.375rem;

	.section-title {
		font-size: 80px;
		font-weight: 500;
	}

	.section-text {
		font-weight: 400;
		font-size: 18px;
		text-align: right;
		margin: 10px 0 50px;
	}

	.products-section {
		display: flex;
	}

	.products-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: max-content;
	}

	.product {
		max-height: 450px;
		margin: 0 0 20px 20px;
	}
`

export default ProductPage;