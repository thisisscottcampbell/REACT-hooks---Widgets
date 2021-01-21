import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text, KEY, URL }) => {
	//
	const [translated, setTranslated] = useState('');

	useEffect(() => {
		const translate = async (url) => {
			const res = await axios.post(
				url,
				{},
				{
					params: {
						q: text,
						target: language.value,
						key: KEY,
					},
				}
			);
			setTranslated(res.data.data.translations[0].translatedText);
			console.log(translated);
		};

		translate(URL);
	}, [language, text]);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;
