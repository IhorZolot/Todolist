import React from 'react'

export const Filter = ({ setFilter }) => {
	return (
		<div>
			<button onClick={() => setFilter('all')}>All</button>
			<button onClick={() => setFilter('active')}>Active</button>
			<button onClick={() => setFilter('completed')}>Completed</button>
		</div>
	)
}
