module.exports = (req, res, next) => {
	req.isHash = true;
	next();
};
