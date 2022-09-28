import React, { useState } from 'react';
import styled from 'styled-components';
import PriceSlider from '../component/PriceSlider';
import FilterCheckbox from './FilterCheckbox';
import Characteristics from './Characteristics';
import Categories from './Categories';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

function FilterBox({ clearFilter, category1, changeCategory1, category2, changeCategory2, category3, changeCategory3, category4, changeCategory4, category5, changeCategory5, category6, changeCategory6, category7, changeCategory7, category8, changeCategory8, category9, changeCategory9, category10, changeCategory10, category11, changeCategory11, selectedPrice, changePrice, gender, changeGender, colors, changeColors, sizes, changeSizes, brands, changeBrands, list, checked1, sortAscending, checked2, sortDescending, checked3, sortBySale, checked4, sortByDate, checked5, sortByDefault }) {
	return (
		<FilterContent>
			<p className='filter-canceler' onClick={clearFilter}>Сбросить все фильтры</p>

			<h6 className='filter-header'>Категории</h6>

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

			<h6 className='filter-header'>Цена</h6>
			<div className="filter-items">
				<p className="filter-item">от <span>{selectedPrice[0]}</span></p>
				<p className="filter-item">до <span>{selectedPrice[1]}</span></p>
			</div>
			<PriceSlider value={selectedPrice} changePrice={changePrice}/>

			<h6 className='filter-header'>Пол</h6>
			<ul className='category-items'>
				{gender.map((sex) => (
					<FilterCheckbox
						key={sex.id}
						sex={sex}
						changeChecked={changeGender}
					/>
				))}
			</ul>

			<h6 className='filter-header'>Характеристики</h6>
			<Characteristics
				colors={colors}
				changeColors={changeColors}
				sizes={sizes}
				changeSizes={changeSizes}
				brands={brands}
				changeBrands={changeBrands}
         />
			
			<h6 className='filter-header'>Сортировка</h6>
			<ul className='category-items'>
				<li className='category-item'>
					<label>
						<input type="checkbox"/>
						<span>{"По возрастанию цен"}</span>
					</label>
				</li>
				<li className='category-item'>
					<label>
						<input type="checkbox" />
						<span>{"По убыванию цен"}</span>
					</label>
				</li>
				<li className='category-item'>
					<label>
						<input type="checkbox"/>
						<span>{"Сначала скидки"}</span>
					</label>
				</li>
				<li className='category-item'>
					<label>
						<input type="checkbox" />
						<span>{"Сначала новинки"}</span>
					</label>
				</li>
				<li className='category-item'>
					<label>
						<input type="checkbox"/>
						<span>{"По умолчанию"}</span>
					</label>
				</li>
			</ul>

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
`

export default FilterBox;