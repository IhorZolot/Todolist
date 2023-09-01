import { useState } from 'react'
import { AddForm } from './components/AddForm'
import { Todo } from './components/Todo'

const date = [
	{ title: 'todo1', id: 1, complited: true },
	{ title: 'todo2', id: 2, complited: false },
]

function App() {
	const [todo, setTodo] = useState(date)

	const deliteTodo = id => {
		setTodo(todo.filter(item => item.id !== id))
	}
	const addtodo = todo => {
		setTodo(prev => [...prev, todo])
	}

	return (
		<div>
			<AddForm addtodo={addtodo} />
			<Todo deliteTodo={deliteTodo} todos={todo} />
		</div>
	)
}

export default App
