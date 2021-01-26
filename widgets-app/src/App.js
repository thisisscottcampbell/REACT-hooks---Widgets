import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/Translate/DropDown';
import Translate from './components/Translate/Translate';
import Route from './components/Route';
import Header from './components/Header';
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

const appOptions = [
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
	const [selected, setSelected] = useState(appOptions[0]);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<DropDown
					label="Select a color"
					options={appOptions}
					selected={selected}
					setSelected={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};

export default App;
