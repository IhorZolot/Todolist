import React from 'react'

export const Todo = ({ todos = [], deliteTodo, toggleTodo }) => {
	return (
		<div>
			<ul>
				{todos.map(({ id, title, completed }) => (
					<li key={id}>
						{' '}
						<input type='checkbox' onChange={() => toggleTodo(id)} checked={completed}></input>
						{title}
						<button onClick={() => deliteTodo(id)}>DelTodo</button>
					</li>
				))}
			</ul>
		</div>
	)
}
