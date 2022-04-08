import { useState, useCallback, memo } from 'react';

function BasicCounter() {
	const [counter, setCounter] = useState(0);
	// const handleIncrement = () => {
	// 	setCounter(counter + 1);
	// };
	const handleIncrement = useCallback(() => {
		setCounter(counter + 1);
	}, [counter]);

	console.log(`render`);
	return (
		<div>
			{' '}
			Counter:{counter}
			<br />
			<button onClick={handleIncrement}>Increment</button>
		</div>
	);
}

export default memo(BasicCounter);
