const home = require('../render');

module.exports = (req, res) => {

	home(req.mithril, req.render, { location: 'home' })
		.then(html => res.send(html));

};
