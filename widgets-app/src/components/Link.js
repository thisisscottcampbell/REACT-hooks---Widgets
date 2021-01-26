import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (e) => {
		e.preventDefault();

		window.history.pushState({}, '', href);

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<div onClick={onClick} className={className} href={href}>
			{children}
		</div>
	);
};

export default Link;
