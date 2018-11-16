const render = require('../render');

module.exports = (req, res) => {
	
	return render(
		req.mithril,
		req.render,
		{
			location: 'home',
			content: req.body.snippet,
		}
	)
	.then(html => res.send(html));

};
