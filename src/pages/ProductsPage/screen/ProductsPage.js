import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterBox from '../component/FilterBox';
import ProductBox from '../../Home/components/ProductBox';
import Error from '../../ErrorPage/screen/ErrorPage';
import { filterCategories, filterGender, filterColors, filterSizes, filterBrands } from '../../../data/filter';
import { CartState } from '../../../context/Context';

function ProductPage() {
	const { state: 
		{ products } 
	} = CartState();

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

		setList(updatedList);

		!updatedList.length ? setResultsFound(false) : setResultsFound(true);
	};

 	useEffect(() => {
    	applyFilters();
  	}, [categoryAccessories, categoryEquipment, categoryRun, categoryJackets, categoryVests, categoryPants, categoryTShirts, categoryShirts, categoryShorts, categoryHoodiesSweaters, categoryShoes, selectedPrice, gender, colors, sizes, brands]);

	const [sortedList, setSortedList] = useState(list);
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [checked3, setChecked3] = useState(false);
	const [checked4, setChecked4] = useState(false);
	const [checked5, setChecked5] = useState(false);
	
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

	function sortBySale(a, b) {
		if (a.sale === b.sale) {
			return 0;
		}
		// nulls sort after anything else
		else if (a.sale === null) {
			return 1;
		}
		else if (b.sale === null) {
			return -1;
	  	}
		else {
			return (a.sale > b.sale) ? -1 : 1;
		}
  	}

	function sortByUploadDate(a, b) {
		if (b.date === a.date) {
			return 0;
		}
		else {
			return (b.date < a.date) ? -1 : 1;
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

	// if ((checked1 === false) || (checked2 === false) || (checked3 === false) || (checked4 === false) || (checked5 === false)) {
	// 	list = list.sort(sortDefault);
	// }

	const handleSortAscending = (event) =>  {
		setChecked1(event.target.checked)
	  	setSortedList(list.sort(sortByPrice(true)));
	};
  
	const handleSortDescending = (event) =>  {
		setChecked2(event.target.checked)
	  	setSortedList(list.sort(sortByPrice(false)));
	};
  
	const handleSortBySale = (event) =>  {
		setChecked3(event.target.checked)
	  	setSortedList(list.sort(sortBySale));
	};
	
	const handleSortByDate = (event) =>  {
		setChecked4(event.target.checked)
		setSortedList(list.sort(sortByUploadDate));
	};
	
	const handleSortByDefault = (event) => {
		setChecked5(event.target.checked)
		setSortedList(list.sort(sortDefault));
	};

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
	};

  	return (
	 	<Wrapper>
			<p>{'Главная > Одежда > Мужские куртки'}</p>
			<h1 className='title section-title'>ВСЕ ТОВАРЫ</h1>
			<p className='section-text'>Найдено 110 товаров</p>

			<div className='products-section'>
				<FilterBox
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
					changeGender={handleChangeChecked}
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