import React, { useState, useEffect } from 'react';
import FilterCheckbox from './FilterCheckbox';
import product_card from '../../../data/product_data';
import { filterCategories } from '../../../data/filter';
import arrow from '../assets/blackArrow.svg';

function Categories({id, title, items}) {
	const [isActive, setActive] = useState("false");
	
	const handleToggle = () => {
		setActive(!isActive);	
	};

	const [categories, setCategories] = useState(items);
  
	const [list, setList] = useState(product_card);
	const [resultsFound, setResultsFound] = useState(true);

	const handleChangeCheckedCategories = (id) => {
		const categoriesStateList = categories;
		const changeCheckedCategories = categoriesStateList.map((item) =>
		  	item.id === id ? { ...item, checked: !item.checked } : item
		);
		setCategories(changeCheckedCategories);
	};

  	const applyFilters = () => {
    	let updatedList = product_card;

		// Categories Filter
		const categoriesChecked = categories
			.filter((item) => item.checked)
			.map((item) => item.label);

		if (categoriesChecked.length) {
			updatedList = updatedList.filter((item) =>
			categoriesChecked.includes(item.categories)
			);
		}

		setList(updatedList);

		!updatedList.length ? setResultsFound(false) : setResultsFound(true);
	};

 	useEffect(() => {
    	applyFilters();
  	}, [categories]);

 	return (
	 	<div key={id}>
			<div className={isActive ? 'filter-category section-close' : 'filter-category section-open'}>
				<div className='category-header'>
					<p className='category-title'>{title}</p>
					<img src={arrow} alt="arrow icon" className='filter-icon' onClick={handleToggle}/>
				</div>

				<ul className='category-items'>
					{items.map((item) => (
						<FilterCheckbox 
							key={item.id}
							sex={item}
							changeChecked={handleChangeCheckedCategories}
						/>
					))}
				</ul>
			</div>
		</div>
  	);
}

export default Categories;