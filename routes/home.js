const router = require('express').Router();
const home = require('../render');

router.get('/', (req, res) => {

	home(req.mithril, req.render, { location: 'home' })
		.then(html => res.send(html));

});

module.exports = router;
