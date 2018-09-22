module.exports = () => {

	const mongoose = require("mongoose");

	mongoose.connect(
		"mongodb://localhost:27017/bin-store",
		{ useNewUrlParser: true }
	);

	const models = require("../model")(mongoose);
	return (req, res, next) => {
		req.mongoose = mongoose;
		req.models = models;
		next();
	};

};
