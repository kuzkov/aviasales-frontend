import { combineReducers } from 'redux'

import ticketReducer from './ticketReducer'
import stopsFilterReducer from './stopsFilterReducer'

const rootReducer = combineReducers({
	tickets: ticketReducer,
	stopsFilter: stopsFilterReducer
})

export default rootReducer