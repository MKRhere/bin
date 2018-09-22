const head = require('./components/head');
const body = require('./components/body');

module.exports = (m, render, { location, content = '' }) => {

	return render(m('html',
		[
			head(m, {
				title: 'mkr/bin',
				description: 'Lightweight pastebin alternative',
				keywords: ['pastebin', 'hastebin', 'notes'],
				style: '/css/style.css' }),
			body(m, {
				location,
				content,
			})
		]
	));

};
