import React from 'react'

import './Row.css'

function Row({ label, children }) {
	return (
		<div className="Row-container">
			<div className="Row-label">{ label }</div>
			<div className="Row-value">{ children }</div>
		</div>
	)
}

export default Row