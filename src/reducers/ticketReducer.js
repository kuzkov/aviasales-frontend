import {
	SORT_TICKETS,
	RECEIVE_TICKETS
} from './ticketTypes'
import {
	SORT_BY_PRICE,
	SORT_BY_DURATION
} from './ticketFilters'

function makeComparator(filter) {
	switch(filter) {
		case SORT_BY_PRICE:
			return function (firstTicket, secondTicket) {
				return firstTicket.price - secondTicket.price
			}
		case SORT_BY_DURATION:
			return function (firstTicket, secondTicket) {
				let ftMin = Math.min(
					...firstTicket.segments.map(route => route.duration)
				)

				let stMin = Math.min(
					...secondTicket.segments.map(route => route.duration)
				)

				return ftMin - stMin
			}
		default:
			throw new Error("No such filter [ticket reducer]")
	}
}

function ticketReducer(state = [], action) {
	switch(action.type) {
		case SORT_TICKETS:
			return state.slice().sort(makeComparator(action.filter))
		case RECEIVE_TICKETS:
			return state.slice().concat(action.tickets)
		default:
			return state
	}
}

export default ticketReducer