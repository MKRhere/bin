const router = require('express').Router();
const render = require('../render');

router.get('/~:id', (req, res) => {
	const { models, mongoose } = req;
	const [ id, language ] = (req.params.id || '').split('.');
	return models.snippets.findOne({ _id: mongoose.Types.ObjectId(id) })
		.then(doc => {
			if (!doc) {
				res.status(404);
				return res.send(
					'<code>Nothing here, go <a href="/">back!</a></code>'
				);
			}
			return render(
				req.mithril,
				req.render,
				{
					location: 'snippet',
					content: doc.content,
					language,
				});
		})
		.then(html => res.send(html));
});

module.exports = router;
