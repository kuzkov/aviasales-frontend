import React from 'react'
import { useSelector } from 'react-redux'

import _ from 'lodash'

import './Pagination.css'

function Pagination({ ticketsPerPage }) {
	const ticketsCount = useSelector(state => state.tickets.length)
	const countOfPages = _.ceil(ticketsCount / ticketsPerPage)

	return (
		<div className="Pagination-container">
			{[...Array(5).keys()].map(index =>
				<a key={index} className="Pagination-item" onClick={() => {}}>{index + 1}</a>
			)}
		</div>
	)
}

export default Pagination