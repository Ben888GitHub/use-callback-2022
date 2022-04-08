import { useState, useCallback } from 'react';
import './App.css';
import Todos from './components/Todos';
import BasicCounter from './components/BasicCounter';
import ApiRequest from './components/ApiRequest';

function App() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount(count + 1);
	};

	// This will cause the Todos Component re-renders because it runs without callback
	// const addTodo = () => {
	// 	setTodos([...todos, 'New Todo']);
	// };

	// if this addTodo() function is not called, then the
	// re-rendering in Todos component is not possible
	const addTodo = useCallback(() => {
		setTodos([...todos, 'New Todo']);
	}, [todos]);

	return (
		<div className="App">
			<h1>useCallback() use cases and examples</h1>
			<br />
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<div>
				Count: {count}
				<button onClick={increment}>+</button>
			</div>
			<br />
			<BasicCounter />
			<br />
			<ApiRequest />
		</div>
	);
}

export default App;
