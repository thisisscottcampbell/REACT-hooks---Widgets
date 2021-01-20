import React from 'react';
import Accordion from './components/Accordion';

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

const App = (props) => {
	return (
		<div>
			<Accordion items={items} />
		</div>
	);
};

export default App;
