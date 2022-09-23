import React from 'react';
import PriceSlider from '../component/PriceSlider';
import FilterCheckbox from './FilterCheckbox';
import Characteristics from './Characteristics';
import Categories from './Categories';
import { filterCategories } from '../../../data/filter';

function FilterBox({selectedPrice, changePrice, gender, changeChecked, colors, changeCheckedColors, sizes, changeCheckedSizes, brands, changeCheckedBrands}) {
	return (
		<div className='filter-content'>
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
		</div>
	);
}

export default FilterBox;