module.exports = (m, { title, description, keywords, style }) => {

	const meta = [
		{ 'http-equiv': 'Content-Type' },
		{ 'content': 'text/html' },
		{
			'name': 'viewport',
			'content': 'width=device-width, initial-scale=1.0'
		},
		{ 'charset': 'utf8' },
		{ 'X-Content-Type-Options': 'nosniff' },
		{ 'description': description },
		{ 'keywords': keywords.join(', ') },
		{ 'robots': 'index, nofollow' },
	];

	return m('head', [
		m('title', title),
		...meta.map(x => m('meta', x)),
		m('link', { rel: 'stylesheet', href: style })
	]);

};
