const render = require('../render');

module.exports = (req, res) => {

	const { models, isHash } = req;
	const [query, language] = (isHash ? req.params.hash : req.params.id || '').split('.');
	const rawMode = Boolean(req.query.raw);
	return (isHash ? models.snippets.findOne({ hash: query }) : models.snippets.findById(query))
		.then(doc => {
			if (!doc) {
				res.status(404);
				return res.send(
					'<code>Nothing here, go <a href="/">back!</a></code>'
				);
			}
			if (rawMode) {
				res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
				res.end(doc.content);
			}
			else
				return render(
					req.mithril,
					req.render,
					{ location: 'snippet', content: doc.content, language, }
				).then(html => res.send(html));
		});

};
