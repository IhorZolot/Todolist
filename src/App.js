import { useEffect, useState } from 'react'
import { AddForm } from './components/AddForm'
import { Todo } from './components/Todo'
import axios from 'axios'
import { Filter } from './components/Filter'

const date = []

function App() {
	const [todo, setTodo] = useState(date)
	const [filter, setFilter] = useState('all')
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
	const getFilterDate = filter => {
		switch (filter) {
			case 'active':
				return todo.filter(item => !item.completed)
			case 'completed':
				return todo.filter(item => item.completed)
			default:
				return todo
		}
	}

	return (
		<div>
			<AddForm addtodo={addtodo} />
			<Filter setFilter={setFilter} />
			<Todo deliteTodo={deliteTodo} todos={getFilterDate(filter)} toggleTodo={toggleTodo} />
		</div>
	)
}

export default App
