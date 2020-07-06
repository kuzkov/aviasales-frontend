import React, { useEffect } from 'react'

import Ticket from './Ticket.js'
import {
	useSelector,
	useDispatch
} from 'react-redux'

import {
	fetchTickets,

	FILTER_ALL,
	FILTER_WITHOUT_STOPS,
	FILTER_1_STOP,
	FILTER_2_STOPS,
	FILTER_3_STOPS,
} from '../reducers/actions'

import './TicketList.css'

function contains(array, element) {
	return array.indexOf(element) !== -1
}

function TicketList() {
	const tickets = useSelector(state => state.tickets)
	const filter = useSelector(state => state.stopsFilter)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTickets())
	}, [])

	function filterTickets(ticket) {
		if (contains(filter, FILTER_ALL))
			return true

		if (contains(filter, FILTER_WITHOUT_STOPS))
			if (ticket.segments.some(route => route.stops.length === 0))
				return true

		if (contains(filter, FILTER_1_STOP))
			if (ticket.segments.some(route => route.stops.length === 1))
				return true

		if (contains(filter, FILTER_2_STOPS))
			if (ticket.segments.some(route => route.stops.length === 2))
				return true

		if (contains(filter, FILTER_3_STOPS))
			if (ticket.segments.some(route => route.stops.length === 3))
				return true

		return false
	}

	return (
		<div className="TicketList">
			{
				tickets
					.filter(filterTickets)
					.map((ticket, index) =>
						<Ticket key={index} {...ticket}/>
					)
			}
		</div>
	)
}

export default TicketList