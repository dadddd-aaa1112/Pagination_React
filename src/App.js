import CountryList from './components/CountryList'
import Pagination from './components/Pagination'
import React, { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import axios from 'axios'

const BASE_URL = 'https://restcountries.com/v2/all'
const App = () => {
	const [countries, setCountries] = useState([])
	const [load, setLoad] = useState(false)

	useEffect(() => {
		setLoad(true)
		axios.get(BASE_URL).then((resp) => {
			const allCountry = resp.data
			setCountries(allCountry)
			setLoad(false)
		})
	}, [])

	const paginate = (page) => setCurrentPage(page)

	const [currentPage, setCurrentPage] = useState(1)
	const countryOnPage = 20
	const countPage = Math.ceil(countries.length / countryOnPage)

	const lastCountries = currentPage * countryOnPage
	const firstCountries = lastCountries - countryOnPage
	const currentCountries = countries.slice(firstCountries, lastCountries)

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prev) => prev - 1)
		} else {
			setCurrentPage(1)
		}
	}

	const nextPage = () => {
		if (currentPage < countPage) {
			setCurrentPage((prev) => prev + 1)
		} else {
			setCurrentPage(countPage)
		}
	}

	return (
		<>
			{load && <BallTriangle color="#00BFFF" height={80} width={80} />}
			<ul>
				<CountryList countries={currentCountries} />
			</ul>
			<Pagination
				count={countPage}
				changeCurrentPage={paginate}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</>
	)
}

export default App
