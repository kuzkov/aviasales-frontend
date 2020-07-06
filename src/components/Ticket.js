import React from 'react'

import Row from './Row'

import './Ticket.css'

function getRouteTime(org, dur) {
	let dateOrigin = new Date(org)
	let dateDest = new Date(dateOrigin.getMilliseconds() + dur * 1000)

	let hoursOrigin = ('00' + dateOrigin.getHours()).slice(-2)
	let minutesOrigin = ('00' + dateOrigin.getMinutes()).slice(-2)

	let hoursDest = ('00' + dateDest.getHours()).slice(-2)
	let minutesDest = ('00' + dateDest.getMinutes()).slice(-2)

	return `${hoursOrigin}:${minutesOrigin} - ${hoursDest}:${minutesDest}`
}

function getDurationTime(dur) {
	let durationDate = new Date(dur * 1000)

	let hoursDuration = durationDate.getHours()
	let minutesDuration = durationDate.getMinutes()

	return `${hoursDuration}ч ${minutesDuration}м`
}

function getFormattedPrice(price) {
	let priceStrReversed = price.toString().split('').reverse()
	priceStrReversed.splice(3, 0, ' ');

	return priceStrReversed.reverse().join('') + ' Р'
}

function Ticket({ carrier, price, segments }) {
	return (
		<div className="Ticket-container">
			<div className="Ticket-header">
				<div className="Ticket-price">
					{getFormattedPrice(price)}
				</div>
				<div className="Ticket-carrier">
					<img
						src={`//pics.avs.io/99/36/${carrier}.png`}
						alt={carrier}
					/>
				</div>
			</div>

			{
				segments.map(({
					date, duration,
					origin, destination,
					stops
				}, index) => (
						<div key={index} className="Ticket-segment">
							<Row label={`${origin} - ${destination}`}>
								{getRouteTime(date, duration)}
							</Row>

							<Row label="В пути">
								{getDurationTime(duration)}
							</Row>

							<Row label={`${stops.length || ''} пересадки`}>
								{stops.join(', ') || 'Без пересадок'}
							</Row>
						</div>
					)
				)
			}
		</div>
	)
}

export default Ticket