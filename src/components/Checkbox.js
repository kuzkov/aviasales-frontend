import React from 'react'

import './Checkbox.css'

function Checkbox({ defaultChecked, checked, onChange, children }) {
	return (
		<label className="Checkbox-container">
			<input
				defaultChecked={defaultChecked}
				checked={checked}
				onChange={onChange}
				className="Checkbox-input"
				type="checkbox"
			/>
			<span className="Checkbox-checkmark">
				{children}
			</span>
		</label>
	)
}

export default Checkbox