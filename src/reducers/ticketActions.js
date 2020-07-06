import {
	SORT_TICKETS,
	RECEIVE_TICKETS
} from './ticketTypes'

import {
	SORT_BY_DURATION,
	SORT_BY_PRICE
} from './ticketFilters'

const SEARCH_URL = "https://front-test.beta.aviasales.ru/search"
const TICKETS_URL = "https://front-test.beta.aviasales.ru/tickets?searchId="

function sortTicketsBy(filter) {
	return {
		type: SORT_TICKETS,
		filter
	}
}

function receiveTickets(tickets) {
	return {
		type: RECEIVE_TICKETS,
		tickets
	}
}

function fetchTickets() {
	return dispatch => {
		fetch(SEARCH_URL)
			.then(res => res.json())
			.then(json => dispatch(fetchData(json.searchId)))
	}
}

function fetchData(searchId) {
	return dispatch => {
		fetch(TICKETS_URL + searchId)
			.then(res => res.json())
			.then(json => {
				dispatch(receiveTickets(json.tickets))
			})
	}
}

export {
	sortTicketsBy,
	receiveTickets,
	fetchTickets,

	SORT_BY_DURATION,
	SORT_BY_PRICE
}