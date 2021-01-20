import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = (props) => {
	//
	const [term, setTerm] = useState('programming');
	const [results, setResults] = useState([]);

	console.log(results);

	useEffect(() => {
		const searchWiki = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api/php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};

		if (term && !results.length) searchWiki();

		const timeoutId = setTimeout(() => {
			if (term) searchWiki();
		});

		return () => {
			clearTimeout(timeouId);
		};
	}, [term]);

	const displayResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
				</div>
				<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
			</div>
		);
	});
	//

	//
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"
					/>
					{term}
				</div>
			</div>
			<div className="ui celled list">{displayResults}</div>
		</div>
	);
};

export default Search;
