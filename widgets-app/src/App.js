import React, { useState } from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/Search';
import DropDown from './components/DropDown';
const items = [
	{
		title: 'What is React?',
		content: 'React is a front end JS framework.',
	},
	{
		title: 'Why use React?',
		content: 'React is a favored library in the JS community.',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components.',
	},
];

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'The Color Blue',
		value: 'blue',
	},
];

const App = () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropDown, setShowDropDown] = useState(true);

	return (
		<div>
			<button onClick={() => setShowDropDown(!showDropDown)}>
				Toggle Dropdown
			</button>
			{showDropDown && (
				<DropDown
					selected={selected}
					setSelected={setSelected}
					options={options}
				/>
			)}
		</div>
	);
};

export default App;
