import React from 'react';

//calls Cardlist as child and creates a miniature scroll bar for the robots while keeping the searchbar and title in frame
const Scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;