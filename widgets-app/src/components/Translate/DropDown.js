import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';

const DropDown = ({ options, selected, setSelected, label }) => {
	//
	const [open, setOpen] = useState(false);

	const ref = useRef();

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) return null;
		return (
			<div
				key={option.value}
				onClick={() => setSelected(option)}
				className="item"
			>
				{option.label}
			</div>
		);
	});

	useEffect(() => {
		const onBodyClick = (e) => {
			const target = e.target;
			if (ref.current && ref.current.contains(target)) return;
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick);

		return () => document.body.removeEventListener('click', onBodyClick);
	}, []);
	//

	//
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropDown;
