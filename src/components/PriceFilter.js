import React, {
	useState, useEffect
} from 'react'

import { useDispatch } from 'react-redux'

import {
	SORT_BY_PRICE,
	SORT_BY_DURATION,
	sortTicketsBy
} from '../reducers/actions'

import './PriceFilter.css'

function PriceFilter() {
	const dispatch = useDispatch()
	const [checked, setChecked] = useState('price')

	useEffect(() => {
		dispatch(sortTicketsBy(SORT_BY_PRICE))
	}, [dispatch])


	return (
		<form className="PriceFilter-form">
			<label>
				<input
					name="pricelist"
					type="radio"
					onChange={
						(event) => {
							dispatch(sortTicketsBy(SORT_BY_PRICE))
							setChecked('price')
						}
					}
					checked={checked === 'price'}
				/>
				<span className="PriceFilter-button">Самый дешевый</span>
			</label>

			<label>
				<input
					name="pricelist"
					type="radio"
					onChange={
						(event) => {
							dispatch(sortTicketsBy(SORT_BY_DURATION))
							setChecked('duration')
						}
					}
					checked={checked === 'duration'}	
				/>
				<span className="PriceFilter-button">Самый быстрый</span>
			</label>
		</form>
	)
}

export default PriceFilter