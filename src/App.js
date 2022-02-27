import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryItem from './components/CountryItem'

const BASE_URL = 'https://restcountries.com/v2/all'

const App = () => {
	const [countries, setCountries] = useState([])
	const [load, setLoad] = useState(false)
	const [countryOnPage] = useState(30)
	const totalPage = Math.ceil(countries.length / countryOnPage)
	const [currentPage, setCurrentPage] = useState(1)

	const lastCountryIndex = currentPage * countryOnPage
	const firstCountryIndex = lastCountryIndex - countryOnPage
	const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	useEffect(() => {
		setLoad(true)
		axios.get(BASE_URL).then((resp) => {
			const allCountries = resp.data
			setCountries(allCountries)
			setLoad(false)
		})
	}, [])

	let countPage = []

	for (let i = 1; i <= totalPage; i++) {
		countPage.push(i)
	}

	return (
		<>
			<h3>Pagination</h3>
			{load && <h3>loading...</h3>}
			<ul>
				{currentCountry.map((country, index) => (
					<CountryItem key={index} {...country} />
				))}
			</ul>
			{countPage.map((page) => (
				<a href="#" key={page} onClick={() => paginate(page)}>
					{page}&nbsp;
				</a>
			))}

			<button onClick={() => setCurrentPage((prev) => prev - 1)}>
				{' '}
				Prev page
			</button>
			<button onClick={() => setCurrentPage((prev) => prev + 1)}>
				{' '}
				Next page
			</button>
		</>
	)
}

export default App
