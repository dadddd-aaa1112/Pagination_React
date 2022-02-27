import React from 'react'

const Pagination = ({ count, changeCurrentPage, prevPage, nextPage }) => {
	const pages = []

	for (let i = 1; i <= count; i++) {
		pages.push(i)
	}

	return (
		<>
			{pages.map((page, index) => (
				<a href="#" key={index} onClick={() => changeCurrentPage(page)}>
					{page}
				</a>
			))}
			<button onClick={prevPage}>Prev page</button>
			<button onClick={nextPage}>Next page</button>
		</>
	)
}

export default Pagination
