import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CartState } from '../../../context/Context';
import { filterCategories, filterGender, filterColors, filterSizes, filterBrands } from '../../../data/filter';
import Error from '../../ErrorPage/screen/ErrorPage';
import ProductBox from '../../Home/components/ProductBox';
import FilterBox from '../component/FilterBox';
import sort from '../assets/sort.svg';
import filter from '../assets/filter.svg';

function ProductPage() {
	const { state: 
		{ products } 
	} = CartState();

	// for Filters
	const [categoryJackets, setCategoryJackets] = useState(filterCategories[0].items);
	const [categoryVests, setCategoryVests] = useState(filterCategories[1].items);
	const [categoryPants, setCategoryPants] = useState(filterCategories[2].items);
	const [categoryTShirts, setCategoryTShirts] = useState(filterCategories[3].items);
	const [categoryShirts, setCategoryShirts] = useState(filterCategories[4].items);
	const [categoryShorts, setCategoryShorts] = useState(filterCategories[5].items);
	const [categoryHoodiesSweaters, setCategoryHoodiesSweaters] = useState(filterCategories[6].items);
	const [categoryShoes, setCategoryShoes] = useState(filterCategories[7].items);
	const [categoryAccessories, setCategoryAccessories] = useState(filterCategories[8].items);
	const [categoryEquipment, setCategoryEquipment] = useState(filterCategories[9].items);
	const [categoryRun, setCategoryRun] = useState(filterCategories[10].items);
	const [selectedPrice, setSelectedPrice] = useState([100, 1000000]);
	const [gender, setGender] = useState(filterGender);
	const [colors, setColors] = useState(filterColors);
	const [sizes, setSizes] = useState(filterSizes);
	const [brands, setBrands] = useState(filterBrands);
	// for Sorting
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [checked3, setChecked3] = useState(false);
	const [checked4, setChecked4] = useState(false);
	const [checked5, setChecked5] = useState(false);
	// Final list
	const [list, setList] = useState(products);
	const [resultsFound, setResultsFound] = useState(true);

	const handleChangeCheckedJackets = (id) => {
		const categoryStateList = categoryJackets;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryJackets(changeCheckedCategory);
	};

	const handleChangeCheckedVests = (id) => {
		const categoryStateList = categoryVests;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryVests(changeCheckedCategory);
	};

	const handleChangeCheckedPants = (id) => {
		const categoryStateList = categoryPants;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryPants(changeCheckedCategory);
	};

	const handleChangeCheckedTShirts = (id) => {
		const categoryStateList = categoryTShirts;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryTShirts(changeCheckedCategory);
	};
	
	const handleChangeCheckedShirts = (id) => {
		const categoryStateList = categoryShirts;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryShirts(changeCheckedCategory);
	};

	const handleChangeCheckedShorts = (id) => {
		const categoryStateList = categoryShorts;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryShorts(changeCheckedCategory);
	};

	const handleChangeCheckedHoodiesSweaters = (id) => {
		const categoryStateList = categoryHoodiesSweaters;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryHoodiesSweaters(changeCheckedCategory);
	};

	const handleChangeCheckedShoes = (id) => {
		const categoryStateList = categoryShoes;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryShoes(changeCheckedCategory);
	};

	const handleChangeCheckedAccessories = (id) => {
		const categoryStateList = categoryAccessories;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryAccessories(changeCheckedCategory);
	};

	const handleChangeCheckedEquipment = (id) => {
		const categoryStateList = categoryEquipment;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryEquipment(changeCheckedCategory);
	};

	const handleChangeCheckedRun = (id) => {
		const categoryStateList = categoryRun;
		const changeCheckedCategory = categoryStateList.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategoryRun(changeCheckedCategory);
	};

	const handleChangePrice = (event, value) => {
		setSelectedPrice(value);
  	};
	  
	const handleChangeCheckedGender = (id) => {
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

	// for Sorting
	const handleSortAscending = (event) => {
		setChecked1(event.target.checked);
		setChecked2(false);
		setChecked3(false);
		setChecked4(false);
		setChecked5(false);
	};
	
	const handleSortDescending = (event) => {
		setChecked2(event.target.checked);
		setChecked1(false);
		setChecked3(false);
		setChecked4(false);
		setChecked5(false);
	};
	
	const handleSortBySale = (event) => {
		setChecked3(event.target.checked);
		setChecked1(false);
		setChecked2(false);
		setChecked4(false);
		setChecked5(false);
	};
	
	const handleSortByDate = (event) => {
		setChecked4(event.target.checked);
		setChecked1(false);
		setChecked2(false);
		setChecked3(false);
		setChecked5(false);
	};
	
	const handleSortByDefault = (event) => {
		setChecked5(event.target.checked);
		setChecked1(false);
		setChecked2(false);
		setChecked3(false);
		setChecked4(false);
	};

  	const applyFilters = () => {
    	let updatedList = products;

		// Category Filter
		const categoryCheckedJackets = categoryJackets
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedJackets.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedJackets.includes(item.category)
			);
		}

		const categoryCheckedVests = categoryVests
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedVests.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedVests.includes(item.category)
			);
		}
		
		const categoryCheckedPants = categoryPants
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedPants.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedPants.includes(item.category)
			);
		}

		const categoryCheckedTShirts = categoryTShirts
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedTShirts.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedTShirts.includes(item.category)
			);
		}
		
		const categoryCheckedShirts = categoryShirts
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedShirts.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedShirts.includes(item.category)
			);
		}

		const categoryCheckedShorts = categoryShorts
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedShorts.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedShorts.includes(item.category)
			);
		}
		
		const categoryCheckedHoodiesSweaters = categoryHoodiesSweaters
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedHoodiesSweaters.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedHoodiesSweaters.includes(item.category)
			);
		}

		const categoryCheckedShoes = categoryShoes
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedShoes.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedShoes.includes(item.category)
			);
		}
		
		const categoryCheckedAccessories = categoryAccessories
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedAccessories.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedAccessories.includes(item.category)
			);
		}
		
		const categoryCheckedEquipment = categoryEquipment
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedEquipment.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedEquipment.includes(item.category)
			);
		}

		const categoryCheckedRun = categoryRun
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoryCheckedRun.length) {
			updatedList = updatedList.filter((item) =>
				categoryCheckedRun.includes(item.category)
			);
		}

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
			updatedList = updatedList.filter((item) => {
				const productColors = item.colors.map(color => color.label);

				return colorsChecked.length === colorsChecked
					.filter(color => productColors.includes(color)).length
			});
		}

		// Sizes Filter
		const sizesChecked = sizes
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (sizesChecked.length) {
			updatedList = updatedList.filter((item) => {
				const productSizes = item.sizes.map(size => size.label);

				return sizesChecked.length === sizesChecked
					.filter(size => productSizes.includes(size)).length
			});
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

		// Sorting
		function sortByPrice(ascending) {
			return function (a, b) {
				// equal items sort equally
				if (a.price === b.price) {
					return 0;
				}
				// if we're ascending, lowest sorts first
				else if (ascending) {
					return (a.price < b.price) ? -1 : 1;
				}
				// if descending, highest sorts first
				return (a.price < b.price) ? 1 : -1;
			}
		}

		function sortDefault(a, b) {
			if (b.id === a.id) {
				return 0;
			}
			else {
				return (b.id > a.id) ? -1 : 1;
			}
		}

		if (checked1 === true) {
			updatedList = updatedList.sort(sortByPrice(true));
		}

		if (checked2 === true) {
			updatedList = updatedList.sort(sortByPrice(false));
		}

		if (checked3 === true) {
			updatedList = updatedList.filter((item) =>
				(item.sale !== null) && (item.sale !== "Новинка")
			);
		}

		if (checked4 === true) {
			updatedList = updatedList.filter((item) =>
				(item.sale === "Новинка")
			);
		}

		if (checked5 === true) {
			updatedList = updatedList.sort(sortDefault)
		}

		setList(updatedList);

		!updatedList.length ? setResultsFound(false) : setResultsFound(true);
	};

	useEffect(() => {
    	applyFilters();
  	}, [categoryAccessories, categoryEquipment, categoryRun, categoryJackets, categoryVests, categoryPants, categoryTShirts, categoryShirts, categoryShorts, categoryHoodiesSweaters, categoryShoes, selectedPrice, gender, colors, sizes, brands, checked1, checked2, checked3, checked4, checked5]);

	const handleClearFilter = () => {
		const jacketsList = categoryJackets;
		const changeJackets = jacketsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryJackets(changeJackets);
	
		const vestsList = categoryVests;
		const changeVests = vestsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryVests(changeVests);
	
		const pantsList = categoryPants;
		const changePants = pantsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryPants(changePants);
	
		const tshirtsList = categoryTShirts;
		const changeTshirts = tshirtsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryTShirts(changeTshirts);
	
		const shirtsList = categoryShirts;
		const changeShirts = shirtsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryShirts(changeShirts);
	
		const shortsList = categoryShorts;
		const changeShorts = shortsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryShorts(changeShorts);
	
		const hoodiesSweatersList = categoryHoodiesSweaters;
		const changeHoodiesSweaters = hoodiesSweatersList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryHoodiesSweaters(changeHoodiesSweaters);
	
		const shoesList = categoryShoes;
		const changeShoes = shoesList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryShoes(changeShoes);
	
		const accessoriesList = categoryAccessories;
		const changeAccessories = accessoriesList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryAccessories(changeAccessories);
	
		const equipmentList = categoryEquipment;
		const changeEquipment = equipmentList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryEquipment(changeEquipment);
	
		const runList = categoryRun;
		const changeRun = runList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setCategoryRun(changeRun);
	
		const changePrice = [100, 1000000];
		setSelectedPrice(changePrice);

		const genderList = gender;
		const changeGender = genderList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setGender(changeGender);
		
		const colorsList = colors;
		const changeColors = colorsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setColors(changeColors);
		
		const sizesList = sizes;
		const changeSizes = sizesList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setSizes(changeSizes);
		
		const brandsList = brands;
		const changeBrands = brandsList.map((item) =>
			item.checked === true ? { ...item, checked: !item.checked } : item
		);
		setBrands(changeBrands);

		setChecked1(false);
		setChecked2(false);
		setChecked3(false);
		setChecked4(false);
		setChecked5(false);
	};

	const [isActive1, setActive1] = useState("false");
	const [isActive2, setActive2] = useState("false");
	const [count, setCount] = useState(0);

	const handleToggleFilter = () => {
		setActive1(!isActive1);	
		setCount(1);
	};
	
	const handleToggleSorting = () => {
		setActive2(!isActive2);	
	};
	return (
		<Wrapper>
			<div className={isActive1 ? 'section-container' : 'section-container dark-backgrounds'} onClick={isActive1 ? null : handleToggleFilter}>
				<p className='section-hierarchy'>{'Главная > Одежда > Все товары'}</p>
				<h1 className='title section-title'>ВСЕ ТОВАРЫ</h1>

				<div className="filter-buttons">
					<div className="filter-btn" onClick={handleToggleSorting}>
						<p>Сортировка</p>
						<img src={sort} alt="sorting icon"/>
					</div>
					<div className="filter-btn" onClick={handleToggleFilter}>
						<p>Фильтр</p>
						<img src={filter} alt="filter icon"/>
					</div>
				</div>

				<p className='section-text'>Найдено {list.length} { (list.length > 10 && list.length < 1) ? <span>товаров</span> : <span>товара</span> }</p>

				<div className='products-section'>
					<FilterBox 
						count={count}
						activeFilter={isActive1}
						activeSorting={isActive2}
						clearFilter={handleClearFilter}
						category1={categoryJackets}
						changeCategory1={handleChangeCheckedJackets}
						category2={categoryVests}
						changeCategory2={handleChangeCheckedVests}
						category3={categoryPants}
						changeCategory3={handleChangeCheckedPants}
						category4={categoryTShirts}
						changeCategory4={handleChangeCheckedTShirts}
						category5={categoryShirts}
						changeCategory5={handleChangeCheckedShirts}
						category6={categoryShorts}
						changeCategory6={handleChangeCheckedShorts}
						category7={categoryHoodiesSweaters}
						changeCategory7={handleChangeCheckedHoodiesSweaters}
						category8={categoryShoes}
						changeCategory8={handleChangeCheckedShoes}
						category9={categoryAccessories}
						changeCategory9={handleChangeCheckedAccessories}
						category10={categoryEquipment}
						changeCategory10={handleChangeCheckedEquipment}
						category11={categoryRun}
						changeCategory11={handleChangeCheckedRun}
						selectedPrice={selectedPrice}
						changePrice={handleChangePrice}
						gender={gender}
						changeGender={handleChangeCheckedGender}
						colors={colors}
						changeColors={handleChangeCheckedColors}
						sizes={sizes}
						changeSizes={handleChangeCheckedSizes}
						brands={brands}
						changeBrands={handleChangeCheckedBrands}
						list={list}
						sortAscending={handleSortAscending}
						checked1={checked1}
						sortDescending={handleSortDescending}
						checked2={checked2}
						sortBySale={handleSortBySale}
						checked3={checked3}
						sortByDate={handleSortByDate}
						checked4={checked4}
						sortByDefault={handleSortByDefault}
						checked5={checked5}
					/>
					
					{ (list.length === 0) ?
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
			</div>

			<div className="mobile">
				<FilterBox 
					count={count}
					activeFilter={isActive1}
					activeSorting={isActive2}
					clearFilter={handleClearFilter}
					category1={categoryJackets}
					changeCategory1={handleChangeCheckedJackets}
					category2={categoryVests}
					changeCategory2={handleChangeCheckedVests}
					category3={categoryPants}
					changeCategory3={handleChangeCheckedPants}
					category4={categoryTShirts}
					changeCategory4={handleChangeCheckedTShirts}
					category5={categoryShirts}
					changeCategory5={handleChangeCheckedShirts}
					category6={categoryShorts}
					changeCategory6={handleChangeCheckedShorts}
					category7={categoryHoodiesSweaters}
					changeCategory7={handleChangeCheckedHoodiesSweaters}
					category8={categoryShoes}
					changeCategory8={handleChangeCheckedShoes}
					category9={categoryAccessories}
					changeCategory9={handleChangeCheckedAccessories}
					category10={categoryEquipment}
					changeCategory10={handleChangeCheckedEquipment}
					category11={categoryRun}
					changeCategory11={handleChangeCheckedRun}
					selectedPrice={selectedPrice}
					changePrice={handleChangePrice}
					gender={gender}
					changeGender={handleChangeCheckedGender}
					colors={colors}
					changeColors={handleChangeCheckedColors}
					sizes={sizes}
					changeSizes={handleChangeCheckedSizes}
					brands={brands}
					changeBrands={handleChangeCheckedBrands}
					list={list}
					sortAscending={handleSortAscending}
					checked1={checked1}
					sortDescending={handleSortDescending}
					checked2={checked2}
					sortBySale={handleSortBySale}
					checked3={checked3}
					sortByDate={handleSortByDate}
					checked4={checked4}
					sortByDefault={handleSortByDefault}
					checked5={checked5}
				/>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.nav`
	.section-container {
		padding: 1.875rem 13.125vw 9.375rem;
	}

	.section-hierarchy {
		font-size: 16px;
		font-weight: 500;
		color: var(--clr-primary-4);
	}

	.section-title {
		font-size: 80px;
		font-weight: 500;
	}

	.filter-buttons {
		display: none;
	}

	.section-text {
		font-size: 18px;
		font-weight: 400;
		text-align: right;
		margin: 0.625rem 0 3.125rem;
	}

	.products-section {
		display: flex;
		justify-content: space-between;
	}

	.products-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: max-content;
	}

	.product {
		margin: 0 0 1.25vw 1.25vw;
	}

	.box-content {
		border: none;
	}

	.product:hover .box-content {
		border: 1px solid var(--clr-primary-3);
	}

	.product-image {
		margin: 0 1.5625vw;
		margin-bottom: -6px;
	}

	.product-button {
		display: none;
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

	.mobile .filter-canceler,
	.mobile .filter,
	.mobile .sorting {
		display: none;
	}


	@media (max-width: 1100px) {
		.section-container {
			padding: 1.875rem 9vw 9.375rem;
		}
	}

	@media (max-width: 1024px) {
		.section-title {
			font-size: 70px;
		}

		.section-hierarchy {
			font-size: 14px;
		}

		.section-text {
			font-size: 16px;
		}
	}
	
	@media (max-width: 992px) {
		.section-title {
			font-size: 60px;
		}
		
		.section-hierarchy {
			font-size: 13px;
		}
		
		.section-text {
			font-size: 15px;
			margin: 0.625rem 0 2.5rem;
		}
	}
	
	@media (max-width: 768px) {
		.section-title {
			font-size: 55px;
		}
		
		.section-text {
			font-size: 14px;
			margin: 0.3125rem 0 1.875rem;
		}
	}
	
	@media (max-width: 740px) {
		.products-content {
			grid-template-columns: repeat(2, 1fr);
		}

		.products-section {
			display: flex;
			justify-content: flex-start;
		}

		.product {
			margin: 0 0 2.5vw 3.75vw;
		}
	}

	@media (max-width: 650px) {
		.section-title {
			font-size: 45px;
		}

		.section-hierarchy {
			font-size: 11px;
		}

		.section-text {
			font-size: 12px;
		}
	}

	@media (max-width: 590px) {
		.product {
			margin: 0 0 2.5vw 2.8125vw;
		}
	}
	
	@media (max-width: 550px) {
		.product {
			margin: 0 0 2.5vw 2.5vw;
		}
	}
	
	@media (max-width: 500px) {
		.product {
			margin: 0 0 1.25vw 1.25vw;
		}
	}

	@media (max-width: 480px) {
		.section-container {
			position: relative;
			padding: 0 0 9.375rem;
			background-color: var(--clr-primary-6);
		}
	
		.dark-backgrounds:after {
			content: "";
			position: absolute;
			top: -10%;
			left: 0;
			bottom: -34%;
			right: 0;
			background: #00000050;
			z-index: 3;
		}
		
		.section-hierarchy {
			display: none;
		}

		.section-title {
			position: relative;
			font-size: 28px;
			background-color: var(--clr-white);
			padding: 1.25rem 5.5556vw;
		}

		.section-title:after {
			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			left: 0;
			bottom: 0;
			background: var(--clr-primary-6);
		}

		.products-section .filter,
		.products-section .sorting {
			display: none;
		}

		.filter-buttons {
			display: flex;
			justify-content: space-between;
			padding: 0.625rem 5.5556vw 1.25rem;
			background-color: var(--clr-white);
		}

		.filter-btn {
			display: flex;
		}
		
		.filter-btn p {
			font-size: 16px;
			font-weight: 400;
			text-decoration: underline;
			margin-right: 5px;
		}

		.section-text {
			font-size: 14px;
			font-weight: 400;
			margin: 20px 5.5556vw 10px;
		}

		.products-section {
			flex-direction: column;
			margin: 0 4.167vw;
		}

		.products-content {
			grid-template-columns: repeat(2, 1fr);
		}

		.product {
			margin: 0 1.389vw 2.778vw;
		}


		.mobile .filter,
		.mobile .sorting {
			display: block;
		}
	}
`

export default ProductPage;