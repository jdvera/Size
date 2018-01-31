var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/sizes/:gender/:measurement/:brand", function(req, res) {
		console.log("included brand\n------------");
		console.log(req.params);
		console.log(req.params);
		db.Sizes.findOne({
			where: {
				brand: req.params.brand,
				gender: req.params.gender,
				inchMin: { [Op.lte]: req.params.measurement},
				inchMax: { [Op.gte]: req.params.measurement }
			}
		}).then(function(dbPost) {
			res.json(dbPost);
		});
	});

	app.get("/api/sizes/:gender/:measurement", function(req, res) {
		console.log("no brand\n------------");
		console.log(req.params);
		db.Sizes.findAll({
			where: {
				gender: req.params.gender,
				inchMin: { [Op.lte]: req.params.measurement },
				inchMax: { [Op.gte]: req.params.measurement }
			}
		}).then(function(dbPost) {
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