import React from 'react';
import CheckBoxContainer from './CheckBoxContainer';
import { filterCategories } from '../../../data/filter';

function Categories({ categoryJackets, changeJackets, categoryVests, changeVests, categoryPants, changePants, categoryTShirts, changeTShirts, categoryShirts, changeShirts, categoryShorts, changeShorts, categoryHoodiesSweaters, changeHoodiesSweaters, categoryShoes, changeShoes, categoryAccessories, changeAccessories, categoryEquipment, changeEquipment, categoryRun, changeRun }) {
	
 	return (
	 	<div>
			{filterCategories.slice(0,1)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryJackets}
						changeCheckedFilters={changeJackets}
					/>
            );
         })}
			
			{filterCategories.slice(1,2)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryVests}
						changeCheckedFilters={changeVests}
					/>
            );
         })}
			
			{filterCategories.slice(2,3)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryPants}
						changeCheckedFilters={changePants}
					/>
            );
         })}
			
			{filterCategories.slice(3,4)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryTShirts}
						changeCheckedFilters={changeTShirts}
					/>
            );
         })}
			
			{filterCategories.slice(4,5)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryShirts}
						changeCheckedFilters={changeShirts}
					/>
            );
         })}
			
			{filterCategories.slice(5,6)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryShorts}
						changeCheckedFilters={changeShorts}
					/>
            );
         })}
			
			{filterCategories.slice(6,7)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryHoodiesSweaters}
						changeCheckedFilters={changeHoodiesSweaters}
					/>
            );
         })}
			
			{filterCategories.slice(7,8)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryShoes}
						changeCheckedFilters={changeShoes}
					/>
            );
         })}
			
			{filterCategories.slice(8,9)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryAccessories}
						changeCheckedFilters={changeAccessories}
					/>
            );
         })}
			
			{filterCategories.slice(9,10)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryEquipment}
						changeCheckedFilters={changeEquipment}
					/>
            );
         })}
			
			{filterCategories.slice(10,11)
			.map((item) => {
            return(
	            <CheckBoxContainer 
						key={item.id} 
						title={item.title}
						filters={categoryRun}
						changeCheckedFilters={changeRun}
					/>
            );
         })}
		</div>
  	);
}

export default Categories;