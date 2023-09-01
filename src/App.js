import { useEffect, useState } from 'react'
import { AddForm } from './components/AddForm'
import { Todo } from './components/Todo'
import axios from 'axios'

const date = []

function App() {
	const [todo, setTodo] = useState(date)
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => {
			console.log(res)
			setTodo(res.data)
		})
	}, [])
	const toggleTodo = id => {
		setTodo(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}

	const deliteTodo = id => {
		setTodo(todo.filter(item => item.id !== id))
	}
	const addtodo = todo => {
		setTodo(prev => [...prev, todo])
	}

	return (
		<div>
			<AddForm addtodo={addtodo} />
			<Todo deliteTodo={deliteTodo} todos={todo} toggleTodo={toggleTodo} />
		</div>
	)
}

export default App
