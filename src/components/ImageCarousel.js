import React from 'react';
import Slider from 'react-slick';
import brands from '../data/brand_data';

function ImageCarousel({ images }) {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	};
	
  	return (
		// 							<img src={image.label} alt="product image"/>
		<Slider {...settings}>
			{images.map((image) => {
				return(
					<img src={image.label} alt="product image" className=' button product-image'/>
				);
			})}
		</Slider>
  	);
}

export default ImageCarousel;