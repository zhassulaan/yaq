import React from 'react';
import CheckBoxContainer from './CheckBoxContainer';
import { filterCharacteristics } from "../../../data/filter";

function Characteristic({colors, changeCheckedColors, sizes, changeCheckedSizes, brands, changeCheckedBrands}) {
 	return (
	 	<div>
			{filterCharacteristics.slice(0,1).map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={colors}
						changeCheckedFilters={changeCheckedColors}
					/>
            );
         })}
			{filterCharacteristics.slice(1,2).map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={sizes}
						changeCheckedFilters={changeCheckedSizes}
					/>
            );
         })}
			{filterCharacteristics.slice(2,3).map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={brands}
						changeCheckedFilters={changeCheckedBrands}
					/>
            );
         })}
		</div>
  	);
}

export default Characteristic;