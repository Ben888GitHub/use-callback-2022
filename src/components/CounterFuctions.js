import { useState, useCallback } from 'react';

function CounterFuctions() {
	const funccount = new Set();

	const [count, setCount] = useState(0);
	const [number, setNumber] = useState(0);

	// All 3 functions will be recreated whenever the counter is updated just by one function
	// const incrementCounter = () => {
	// 	setCount(count + 1);
	// };
	// const decrementCounter = () => {
	// 	setCount(count - 1);
	// };

	// const incrementNumber = () => {
	// 	setNumber(number + 1);
	// };

	// Now it will just be recreated only when the counter is updated
	const incrementCounter = useCallback(() => {
		setCount(count + 1);
	}, [count]);
	const decrementCounter = useCallback(() => {
		setCount(count - 1);
	}, [count]);
	const incrementNumber = useCallback(() => {
		setNumber(number + 1);
	}, [number]);

	funccount.add(incrementCounter);
	funccount.add(decrementCounter);
	funccount.add(incrementNumber);
	alert(funccount.size);

	return (
		<div>
			Count: {count}
			<button onClick={incrementCounter}>Increase counter</button>
			<button onClick={decrementCounter}>Decrease Counter</button>
			<button onClick={incrementNumber}>increase number</button>
		</div>
	);
}

export default CounterFuctions;
