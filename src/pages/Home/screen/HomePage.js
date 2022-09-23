import React from 'react';
import About from '../components/About';
import Services from '../components/Services';
import Hero from '../components/Hero';

function HomePage() {
  	return (
		<main>
	 		<Hero/>
	 		<About/>
			<Services/>
		</main>
  	);
}

export default HomePage;