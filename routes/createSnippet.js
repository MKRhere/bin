const router = require('express').Router();

router.post('/', (req, res) => {
	const content = req.body.snippet;
	if (!content) return res.redirect('/');
	req.models.snippets.create({ content })
		.then(doc => {
			res.redirect(`/~${doc._id}`);
		});
});

module.exports = router;
