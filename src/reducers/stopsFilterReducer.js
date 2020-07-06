import {
	TOGGLE_STOPS_FILTER,
	FILTER_ALL
} from './stopsFilterTypes'

function contains(array, element) {
	return array.indexOf(element) !== -1
}

function toggleElements(array, ...elements) {
	for (let element of elements) {
		let index
		
		if ((index = array.indexOf(element)) !== -1)
			array.splice(index, 1)
		else
			array.push(element)		
	}

	return array
}

function stopsFilterReducer(state = [FILTER_ALL], action) {
	switch(action.type) {
		case TOGGLE_STOPS_FILTER:
			if (state.length === 1 && action.filter === state[0])
				return [FILTER_ALL]

			if (action.filter === FILTER_ALL && !contains(state, FILTER_ALL))
				return [FILTER_ALL]

			if (action.filter !== FILTER_ALL && contains(state, FILTER_ALL))
				return toggleElements(state.slice(), action.filter, FILTER_ALL)

			return toggleElements(state.slice(), action.filter)
		default:
			return state
	}
}

export default stopsFilterReducer