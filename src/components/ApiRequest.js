import axios from 'axios';
import { useState, useCallback, useEffect, memo } from 'react';

// NOTE:

const ApiRequest = memo(() => {
	const [text, setText] = useState('');
	console.log(`ApiRequest Re-Render`);
	const handleText = (event) => {
		setText(event.target.value);
	};
	// Gets a new object reference when it is re-created.
	// It is re-created whenever DogPark re-renders.
	// const fetchDog = async (number) => {
	// 	const result = await axios.get(`https://api.thedogapi.com/v1/breeds/`);
	// 	return result.data.splice(0, number);
	// };

	const fetchDog = useCallback((number) => {
		axios
			.get(`https://api.thedogapi.com/v1/breeds/`)
			.then((response) => {
				console.log(response);
				return response.data.splice(0, number);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<>
			<h1>Welcome to {text || 'The Dog Park'}!</h1>
			<p>
				<label>
					Name your dog park:{' '}
					<input type="text" value={text} onChange={handleText} />
				</label>
			</p>
			<p>Add the perfect Dogs to your park! Maximum of 10.</p>
			<Dogs onFetchDog={fetchDog} />
		</>
	);
});

// NOTE:
// If something changes inside the Dogs Component,
// And it is re-rendered, this will not trigger a re-render
// of the parent component. This is good
const Dogs = ({ onFetchDog }) => {
	const [number, setNumber] = useState(1);
	const [dogList, setDogList] = useState([]);

	console.log(`Dog Park Re-Render`);
	useEffect(() => {
		if (number && typeof onFetchDog === 'function') {
			const fetchDog = async () => {
				const response = await onFetchDog(number);
				setDogList(response);
			};
			fetchDog();
		}
	}, [onFetchDog, number]);

	return (
		<>
			<label>
				Number of dogs:{' '}
				<input
					max="10"
					min="1"
					value={number}
					type="number"
					onChange={(event) => setNumber(event.target.value)}
				/>
			</label>
			{dogList && (
				<ul>
					{dogList.map((dog) => (
						<li key={dog.id}>{dog.name}</li>
					))}
				</ul>
			)}
		</>
	);
};

export default ApiRequest;
