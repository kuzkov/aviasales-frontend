import {
	TOGGLE_STOPS_FILTER,

	FILTER_ALL,
	FILTER_WITHOUT_STOPS,
	FILTER_1_STOP,
	FILTER_2_STOPS,
	FILTER_3_STOPS,
} from './stopsFilterTypes'

function toggleFilter(filter) {
	return {
		type: TOGGLE_STOPS_FILTER,
		filter
	}
}

export {
	toggleFilter,
	
	TOGGLE_STOPS_FILTER,

	FILTER_ALL,
	FILTER_WITHOUT_STOPS,
	FILTER_1_STOP,
	FILTER_2_STOPS,
	FILTER_3_STOPS,
}
