var db = require("../models");

module.exports = function(app) {
	// -- API routes for results.js to display results
	app.get("/api/sizes", function(req, res) {
		db.Sizes.findAll(
			{ where: { type: req.body.type, size: req.body.size } }
		).then(function(dbPost) {
			res.json(dbPost);
		});
	});
};