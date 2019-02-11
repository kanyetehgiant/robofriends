import React from 'react';

const Card = ({ name, email, id }) => {
	/*destructured to call props.name, props.email, and props.id; can now be called by just name, email, and id
		robohash changes robots based on changes to URL as stated in documentation. 
		props.id corresponds to a specific robot based on the change to the URL */
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> 
			<div>
				<h2>{name}</h2> 
				<p>{email}</p> 
			</div>
		</div>		
	);
}

export default Card;