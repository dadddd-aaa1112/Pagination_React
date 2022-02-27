import CountryItem from './CountryItem'

const CountryList = ({ countries }) => {
	return (
		<>
			<ul>
				{countries.map((country) => (
					<CountryItem key={country.numericCode} {...country} />
				))}
			</ul>
		</>
	)
}

export default CountryList
