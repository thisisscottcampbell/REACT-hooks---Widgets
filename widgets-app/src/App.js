import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/Translate/DropDown';
import Translate from './components/Translate/Translate';
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
	const wpl = window.location.pathname;
	// const [selected, setSelected] = useState(options[0]);
	// const [showDropDown, setShowDropDown] = useState(true);

	// const showAccordion = () => {
	// 	if (window.location.pathname === '/') return <Accordion items={items} />;
	// };

	// const showList = () => {
	// 	if (window.location.pathname === '/list') return <Search />;
	// };

	// const showDropDown = () => {
	// 	if (window.location.pathname === '/dropdown') return <DropDown />;
	// };

	// const showTranslate = () => {
	// 	if (window.location.pathname === '/translate') return <Translate />;
	//};

	return (
		<div>
			{wpl === '/' && <Accordion items={items} />}
			{wpl === '/list' && <Search />}
			{wpl === '/dropdown' && <DropDown />}
			{wpl === '/translate' && <Translate />}
		</div>
	);
};

export default App;
