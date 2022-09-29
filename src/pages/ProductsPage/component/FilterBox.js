import React, { useState } from 'react';
import styled from 'styled-components';
import PriceSlider from '../component/PriceSlider';
import FilterCheckbox from './FilterCheckbox';
import Characteristics from './Characteristics';
import Categories from './Categories';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import arrow from '../assets/blackArrow.svg';

function FilterBox({ activeFilter, activeSorting, clearFilter, category1, changeCategory1, category2, changeCategory2, category3, changeCategory3, category4, changeCategory4, category5, changeCategory5, category6, changeCategory6, category7, changeCategory7, category8, changeCategory8, category9, changeCategory9, category10, changeCategory10, category11, changeCategory11, selectedPrice, changePrice, gender, changeGender, colors, changeColors, sizes, changeSizes, brands, changeBrands, list, checked1, sortAscending, checked2, sortDescending, checked3, sortBySale, checked4, sortByDate, checked5, sortByDefault }) {
	const [isActive, setActive] = useState("false");
	
	const handleToggle = () => {
		setActive(!isActive);	
	};

	return (
		<FilterContent>
			<p className='filter-canceler' onClick={clearFilter}>Сбросить все фильтры</p>
			
			<div className={activeFilter ? 'filter' : 'filter active'}>
				<div className="laptop">
					<div className="filter-header1">
						<h6 className='filter-title'>Категории</h6>
					</div>

					<Categories 
						categoryJackets={category1}
						changeJackets={changeCategory1}	
						categoryVests={category2}
						changeVests={changeCategory2}	
						categoryPants={category3}
						changePants={changeCategory3}	
						categoryTShirts={category4}
						changeTShirts={changeCategory4}	
						categoryShirts={category5}
						changeShirts={changeCategory5}	
						categoryShorts={category6}
						changeShorts={changeCategory6}	
						categoryHoodiesSweaters={category7}
						changeHoodiesSweaters={changeCategory7}	
						categoryShoes={category8}
						changeShoes={changeCategory8}	
						categoryAccessories={category9}
						changeAccessories={changeCategory9}	
						categoryEquipment={category10}
						changeEquipment={changeCategory10}	
						categoryRun={category11}
						changeRun={changeCategory11}	
					/>
				</div>

				<h6 className='filter-title'>Цена <span className='mobile'> (KZT)</span></h6>
				<div className="filter-items">
					<p className="filter-item">от <span>{selectedPrice[0]}</span></p>
					<p className="filter-item">до <span>{selectedPrice[1]}</span></p>
				</div>
				<PriceSlider value={selectedPrice} changePrice={changePrice}/>

				<div className={isActive ? ' section-close' : 'section-open'}>
					<div className="filter-header">
						<p className='filter-title'>Пол</p>
						<img src={arrow} alt="arrow icon" className='filter-icon' onClick={handleToggle}/>
					</div>		
						
					<ul className='category-items'>
						{gender.map((sex) => (
							<FilterCheckbox
								key={sex.id}
								data={sex}
								changeChecked={changeGender}
							/>
						))}
					</ul>
				</div>
						
				<div className="laptop">
					<ul className='category-items'>
						{gender.map((sex) => (
							<FilterCheckbox
								key={sex.id}
								data={sex}
								changeChecked={changeGender}
							/>
						))}
					</ul>
				</div>

				<div className="mobile">
					<div className="filter-header1">
						<h6 className='filter-title'>Категории</h6>
					</div>

					<Categories 
						categoryJackets={category1}
						changeJackets={changeCategory1}	
						categoryVests={category2}
						changeVests={changeCategory2}	
						categoryPants={category3}
						changePants={changeCategory3}	
						categoryTShirts={category4}
						changeTShirts={changeCategory4}	
						categoryShirts={category5}
						changeShirts={changeCategory5}	
						categoryShorts={category6}
						changeShorts={changeCategory6}	
						categoryHoodiesSweaters={category7}
						changeHoodiesSweaters={changeCategory7}	
						categoryShoes={category8}
						changeShoes={changeCategory8}	
						categoryAccessories={category9}
						changeAccessories={changeCategory9}	
						categoryEquipment={category10}
						changeEquipment={changeCategory10}	
						categoryRun={category11}
						changeRun={changeCategory11}	
					/>
				</div>

				<div className="filter-header2">
					<h6 className='filter-title'>Характеристики</h6>
				</div>
				<Characteristics
					colors={colors}
					changeColors={changeColors}
					sizes={sizes}
					changeSizes={changeSizes}
					brands={brands}
					changeBrands={changeBrands}
				/>
			</div>	
			
			<div className={activeSorting ? 'sorting' : 'sorting active'}>
				<h6 className='filter-title laptop'>Сортировка</h6>
				<FormControlLabel
					control={
						<Checkbox
							size='small'
							checked={checked1}
							onChange={sortAscending}
						/>
					}
					label={"По возрастанию цен"}
				/>

				<FormControlLabel
					control={
						<Checkbox
							size='small'
							checked={checked2}
							onChange={sortDescending}
						/>
					}
					label={"По убыванию цен"}
				/>

				<FormControlLabel
					control={
						<Checkbox
							size='small'
							checked={checked3}
							onChange={sortBySale}
						/>
					}
					label={"Сначала скидки"}
				/>

				<FormControlLabel
					control={
						<Checkbox
							size='small'
							checked={checked4}
							onChange={sortByDate}
						/>
					}
					label={"Сначала новинки"}
				/>

				<div className="laptop">
					<FormControlLabel
						control={
							<Checkbox
								size='small'
								checked={checked5}
								onChange={sortByDefault}
							/>
						}
						label={"По умолчанию"}
					/>
				</div>
			</div>
		</FilterContent>
	);
}

const FilterContent = styled.nav`
	max-width: 280px;

	.filter-canceler {
		color: var(--clr-primary-4);
		text-decoration: underline;
		margin-bottom: -10px;
		cursor: pointer;
	}

	.filter-header {
		margin-top: 60px;
	}

	.filter-title {
		font-size: 20px;
		font-weight: 500;
		margin-top: 40px;
	}
	
	.filter-icon {
		cursor: pointer;
	}

	.section-close .category-items {
		height: 0;
		overflow: hidden;
		margin: 0;
	}
		
	.section-close .filter-icon {
		transform: rotate(-180deg);
		margin-bottom: 0.438rem;
	}

	.section-open .category-items {
		height: 100%;
	}

	.section-open .filter-icon {
		transform: rotate(0deg);
	}

	.category-header {
		width: 210px;
		display: flex;
		justify-content: space-between;
	}

	.category-title,
	.category-item {
		font-size: 16px;
		font-weight: 400;
		margin-top: 10px;
	}

	.filter-items {
		display: flex;
		margin: 10px 0 16px;
	}
	
	.filter-item {
		width: 100px;
	}

	.filter-items span {
		text-decoration: underline;
		color: var(--clr-black);
	}
	
	.filter-item {
		font-size: 14px;
		font-weight: 400;
		color: var(--clr-primary-4);
	}

	.mobile,
	.filter-header .filter-icon {
		display: none;
	}

	@media (max-width: 480px) {
		max-width: max-content;


		@keyframes animate {
			0% {
				transform: translateY(600px);
			}
			100% {
				transform: translateY(0px);
			}
		}

		.filter-canceler,
		.laptop,
		.laptop.filter-title {
			display: none;
		}
		
		.mobile,
		.filter-header .filter-icon {
			display: block;
		}

		.filter {
			position: absolute;
			display: none;
			width: 100%;
			left: 0;
			background: var(--clr-white);
			padding: 1.25rem 1.25rem 1.875rem;
			z-index: 3;
			animation: animate 1s linear 0s;
		}

		.filter-title {
			display: flex;
			margin: 0 0 1.25rem;
		}
		
		.filter-title span {
			margin-left: 0.3125rem;
		}

		.filter-header {
			display: flex;
			justify-content: space-between;
			margin-top: 2.5rem;
		}

		.filter-header .filter-title,
		.filter-header .filter-icon {
			margin: 0;
		}

		.section-close .category-items {
			height: 0;
			overflow: hidden;
			margin: 0;
		}
	
		.section-open .category-items {
			height: 100%;
		}

		.filter-header1,
		.filter-header2 {
			position: relative;
			align-items: center;
		}

		.filter-header1:after,
		.filter-header2:after,
		.filter-header1:before,
		.filter-header2:before {
			content: "";
			position: absolute;
			height: 1px;
			background: var(--clr-primary-5);
		}
		
		.filter-header1:after,
		.filter-header1:before {
			width: 31.25%;	
		}
	
		.filter-header2:after,
		.filter-header2:before {
			width: 25%;
		}
		
		.filter-header1:after,
		.filter-header2:after {
			right: 0;
			top: 50%;
		}

		.filter-header1:before,
		.filter-header2:before {
			bottom: 50%;
		}

		.filter-header1 .filter-title,
		.filter-header2 .filter-title {
			width: 37.5%;
			text-align: center;
			margin: 1.25rem auto 0;
		}
		
		.filter-title {
			font-size: 18px;
			font-weight: 500;
		}
			
		.category-header {
			width: 100%;
		}

		.sorting {
			position: absolute;
			width: 61.11%;
			background: var(--clr-white);
			top: 15.35%;
			left: 0;
			z-index: 3;
			padding: 1.25rem 0.625rem 1.25rem 0.938rem;
			display: none;
		}
		
		.active {
			display: block;
		}
	}
`

export default FilterBox;