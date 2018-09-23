const mainContent = require('./mainContent');
const footer = require('./footer');

module.exports = (m, { location, content, language }) => {
	const isSnippet = location === 'snippet';

	return m("body", [
		mainContent(m, { location, content, language }),
		footer(m),
		isSnippet && m("link",
			{
				rel: "stylesheet",
				href: "/vendor/highlight/styles/obsidian.css"
			}
		),
		m("script",
			{
				src: "/js/main.js",
				type: "application/javascript"
			}
		),
	]);

};
