import React from 'react'
import {
	useSelector, useDispatch
} from 'react-redux'

import {
	toggleFilter,

	FILTER_ALL,
	FILTER_WITHOUT_STOPS,
	FILTER_1_STOP,
	FILTER_2_STOPS,
	FILTER_3_STOPS,
} from '../reducers/actions'

import './StopsFilter.css'

import Checkbox from './Checkbox'

function contains(array, element) {
	return array.indexOf(element) !== -1
}

function StopsFilter() {
	let filter = useSelector(state => state.stopsFilter)
	let dispatch = useDispatch()

	function onChange(filter) {
		return () => {
			dispatch(toggleFilter(filter))
		}
	}

	return (
		<div className="StopsFilter-container">
			<p className="StopsFilter-header">Количество пересадок</p>
			
			<Checkbox
				onChange={onChange(FILTER_ALL)}
				checked={contains(filter, FILTER_ALL)}
			>Все</Checkbox>
			
			<Checkbox
				onChange={onChange(FILTER_WITHOUT_STOPS)}
				checked={contains(filter, FILTER_WITHOUT_STOPS)}
			>Без пересадок</Checkbox>
			
			<Checkbox
				onChange={onChange(FILTER_1_STOP)}
				checked={contains(filter, FILTER_1_STOP)}
			>1 пересадка</Checkbox>
			
			<Checkbox
				onChange={onChange(FILTER_2_STOPS)}
				checked={contains(filter, FILTER_2_STOPS)}
			>2 пересадки</Checkbox>
			
			<Checkbox
				onChange={onChange(FILTER_3_STOPS)}
				checked={contains(filter, FILTER_3_STOPS)}
			>3 пересадки</Checkbox>
		</div>
	)
}

export default StopsFilter