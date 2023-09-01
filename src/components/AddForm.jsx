import { nanoid } from 'nanoid'
import React, { useState } from 'react'

export const AddForm = ({ addtodo }) => {
	const [value, setValue] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		const newTodo = { id: nanoid(), title: value, completed: false }
		addtodo(newTodo)
		setValue('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input value={value} onChange={e => setValue(e.target.value)} />
			<button>AddTodo</button>
		</form>
	)
}
