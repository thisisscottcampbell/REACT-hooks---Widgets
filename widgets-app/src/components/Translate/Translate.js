import React, { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';
const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const URL = 'https://translation.googleapis.com/language/translate/v2';

const langOptions = [
	{
		label: 'Afrikans',
		value: 'af',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
];
const Translate = (props) => {
	const [language, setLanguage] = useState(langOptions[0]);
	const [text, setText] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => setText(e.target.value)} />
				</div>
			</div>
			<DropDown
				label="Select A Language"
				options={langOptions}
				selected={language}
				setSelected={setLanguage}
			/>
			<Convert language={language} text={text} KEY={KEY} URL={URL} />
		</div>
	);
};

export default Translate;
