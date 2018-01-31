var db = require("../models");

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/sizes/:brand", function(req, res) {
		console.log("included brand\n------------");
		console.log(req.body);
		db.Sizes.findOne(
			{ where: { brand: req.params.brand, gender: req.body.gender, inchMin: { [Op.lte]: req.body.measurement}, inchMax: { [Op.gte]: req.body.measurement } } }
		).then(function(dbPost) {
			res.json(dbPost);
		});
	});

	app.get("/api/sizes", function(req, res) {
		console.log("no brand\n------------");
		console.log(req.body);
		db.Sizes.findAll(
			{ where: { gender: req.body.gender, inchMin: { [Op.lte]: req.body.measurement}, inchMax: { [Op.gte]: req.body.measurement } } }
		).then(function(dbPost) {
			res.json(dbPost);
		});
	});

	// app.post("/api/sizes", function(req, res) {
	// 	db.Sizes.findOne({ where: { brand: req.body.brand, size: req.body.size } }).then(function(response) {
	// 		if(!user) {
	// 			db.Sizes.create(req.body).then(function(dbPost) {
	// 				res.json(dbPost);
	// 			});
	// 		}
	// 		else {
	// 			res.send(false);
	// 		}
	// 	});
	// });
};