import React from 'react'

const CountryItem = ({ name, flag }) => {
	return (
		<li>
			{name}
			<img src={flag} alt="flag" style={{ width: '25px' }} />
		</li>
	)
}

export default CountryItem
