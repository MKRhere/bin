const render = require('../render');

module.exports = (req, res) => {

	const { models, mongoose } = req;
	const [ id, language ] = (req.params.id || '').split('.');
	// Check if raw mode is set OR (useragent has curl AND raw mode is not false)
	const rawMode =
		(
			req.query.raw !== undefined &&
			req.query.raw !== "0" &&
			req.query.raw.toLowerCase() !== "false" &&
			req.query.raw.toLowerCase() !== "n"
		) ||
		(
			req.headers['user-agent'].toLowerCase().includes("curl") &&
			req.query.raw !== "0" &&
			req.query.raw.toLowerCase() === "false" &&
			req.query.raw.toLowerCase() === "n"
		);
	return models.snippets.findOne({ _id: mongoose.Types.ObjectId(id) })
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
