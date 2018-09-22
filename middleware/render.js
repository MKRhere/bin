module.exports = () => {
	
	// use a mock DOM so we can run mithril on the server
	require('mithril/test-utils/browserMock')(global);
	
	const m = require('mithril');
	const render = require('mithril-node-render');
	return (req, res, next) => {

		req.mithril = m;
		req.render = render;
		next();

	};

};
