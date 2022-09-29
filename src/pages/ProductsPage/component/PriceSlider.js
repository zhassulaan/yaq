import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';

const useStyles = makeStyles({
	root: {
		width: '78.5714%',
		height: '4px',
		"@media (max-width: 480px)": {
			width: '100%',
		 }
	},
	thumb: {
		color: `var(--clr-primary-2)`,
	},
	rail: {
		color: `var(--clr-primary-4)`,
	},
	track: {
		color: `var(--clr-primary-2)`,
	},
});

const PriceSlider = ({ value, changePrice }) => {
  	const classes = useStyles();

  	return (
		<Wrapper>
			<div className={classes.root}>
				<Slider
					value={value}
					onChange={changePrice}
					min={100}
					max={1000000}
					classes={{
						thumb: classes.thumb,
						rail: classes.rail,
						track: classes.track,
					}}
				/>
			</div>
		</Wrapper>
  	);
};

const Wrapper = styled.nav`
	.MuiSlider-thumb {
		width: 20px;
		height: 20px;
		margin-top: -9px;
	}
	
	.MuiSlider-thumb:after {
		display: none;
	}
`

export default PriceSlider;