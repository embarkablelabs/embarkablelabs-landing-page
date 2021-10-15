import React from 'react';
import { Link } from 'gatsby';

import { imageLookup } from '../utilities/imageLookup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconLookup } from '../utilities/iconLookup';

export const LogoBlock = ({ showLabel = true, size = 'm' }) => {	

	return (
		<React.Fragment>
			<Link to={`/#`}>
				<div className="inline-flex text-center align-bottom border-none md:border-b-2" href="#">
					<div className="flex justify-center w-10 h-10 p-3 text-white duration-500 bg-accent2-dark rounded-xl transition-colors-shadow hover:bg-pink-400">
						<FontAwesomeIcon icon={iconLookup.faRocket} size="lg"/>
					</div>
					{/* <img className={`${size === 'sm' && 'w-8'} ${size === 'm' && 'w-10'} ${size === 'lg' && 'w-12'}`} src={imageLookup.LogoIcon}/> */}
					{showLabel && <div className="mx-2 my-1 text-xl text-blue-800 fontlogo">embarkable</div>}
				</div>
			</Link>
		</React.Fragment>
	)
};
