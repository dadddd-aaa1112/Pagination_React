import React from 'react'

const CountryItem = ({ name, flag }) => {
	return (
		<>
			<li>
				{name} &nbsp;
				<img src={flag} style={{ width: '25px' }} />
			</li>
		</>
	)
}

export default CountryItem
