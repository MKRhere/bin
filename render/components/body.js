const mainContent = require('./mainContent');
const footer = require('./footer');

module.exports = (m, { location, content }) => {

	return m("body", [
		mainContent(m, { location, content }),
		footer(m),
	]);

};
