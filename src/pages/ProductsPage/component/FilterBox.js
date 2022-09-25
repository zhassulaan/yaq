import React from 'react';
import styled from 'styled-components';
import PriceSlider from '../component/PriceSlider';
import FilterCheckbox from './FilterCheckbox';
import Characteristics from './Characteristics';
import Categories from './Categories';
import { filterCategories } from '../../../data/filter';

function FilterBox({selectedPrice, changePrice, gender, changeChecked, colors, changeCheckedColors, sizes, changeCheckedSizes, brands, changeCheckedBrands}) {
	return (
		<FilterContent>
			<p className='filter-canceler'>Сбросить все фильтры</p>

			<h6 className='filter-header'>Категории</h6>
			{filterCategories.map((item) => {
            return(
	            <Categories key={item.id} {...item}/>
            );
         })}

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
						changeChecked={changeChecked}
					/>
				))}
			</ul>

			<h6 className='filter-header'>Характеристики</h6>
			<Characteristics
				colors={colors}
				changeCheckedColors={changeCheckedColors}
				sizes={sizes}
				changeCheckedSizes={changeCheckedSizes}
				brands={brands}
				changeCheckedBrands={changeCheckedBrands}
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
						<input type="checkbox"/>
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
						<input type="checkbox"/>
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
		</FilterContent>
	);
}

const FilterContent = styled.nav`
	min-width: 280px;

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