import React from 'react'

export const Todo = ({ todos = [], deliteTodo }) => {
	return (
		<div>
			<ul>
				{todos.map(({ id, title }) => (
					<li key={id}>
						{' '}
						{title}
						<button onClick={() => deliteTodo(id)}>DelTodo</button>
					</li>
				))}
			</ul>
		</div>
	)
}
