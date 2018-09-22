const router = require('express').Router();
const render = require('../render');

router.post('/', (req, res) => {
	
	return render(
		req.mithril,
		req.render,
		{
			location: 'home',
			content: req.body.snippet,
		}
	)
	.then(html => res.send(html));

});

module.exports = router;
