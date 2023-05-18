import { useRef, useState, useEffect } from 'react';


const Test = () => {
	const ref = useRef(null);
	const [name, setName] = useState('Noname');

	const handleClick = () => {
		const name = document.getElementById('hi').value;
		setName(name);
	};

	const handleChange = (event) => {
		setName(event.target.value);
	}

	useEffect(() => {
		ref.current.focus();
	}, [])

	return (
		<>
			<div>
				<p class="ptext">Привет, {name}</p>
				<input type="text" id="hi" name="hi" ref={ref} onChange={handleChange} />
				<button onClick={() => handleClick()}>Hi</button>
			</div>
		</>
	);
}

export default Test;
