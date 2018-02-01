var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/sizes/:gender/:measurement/:brand", function(req, res) {
		console.log("included brand\n------------");
		console.log(req.params);
		if(req.user){
			saveUserInfo(req.params.gender, req.params.measurement, req.params.brand);
		}
		db.Sizes.findOne({
			where: {
				gender: req.params.gender,
				inchMin: { [Op.lte]: req.params.measurement},
				inchMax: { [Op.gte]: req.params.measurement },
				LogoId: req.params.brand
			},
		    include: [db.Logos]
		}).then(function(dbSizes) {
			console.log("\nresults\n----------");
			console.log(dbSizes);
			res.json(dbSizes);
		});
	});

	app.get("/api/sizes/:gender/:measurement", function(req, res) {
		console.log("no brand\n------------");
		console.log(req.params);
		if(req.user){
			saveUserInfo(req.params.gender, req.params.measurement, null);
		}
		db.Sizes.findAll({
			where: {
				gender: req.params.gender,
				inchMin: { [Op.lte]: req.params.measurement },
				inchMax: { [Op.gte]: req.params.measurement }
			},
		    include: [db.Logos]
		}).then(function(dbSizes) {
			console.log("\nresults\n----------");
			console.log(dbSizes);
			res.json(dbSizes);
		});
	});

	var saveUserInfo = function(gender, measurement, brand) {
		console.log("saveUserInfo funtion in sizesRoutes.js.  req.user.id below");
		console.log(req.user.id);
		db.Users.update(
			{ gender: gender, measurement: measurement },
			{ where: { id: req.user.id } }
		).then(function(dbUsers) {
			res.json(dbUsers);
		});
	}

	// app.post("/api/sizes", function(req, res) {
	// 	db.Sizes.findOne({ where: { brand: req.body.brand, size: req.body.size } }).then(function(response) {
	// 		if(!user) {
	// 			db.Sizes.create(req.body).then(function(dbSizes) {
	// 				res.json(dbSizes);
	// 			});
	// 		}
	// 		else {
	// 			res.send(false);
	// 		}
	// 	});
	// });
};