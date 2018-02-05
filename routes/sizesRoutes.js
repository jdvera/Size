var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/sizes/:gender/:measurement/:brand", function(req, res) {
		console.log("included brand\n------------");
		console.log(req.params);
		var userObj = checkUser(req, req.params.gender, req.params.measurement);
		db.Sizes.findOne({
			where: {
				gender: req.params.gender,
				inchMin: { [Op.lte]: req.params.measurement},
				inchMax: { [Op.gte]: req.params.measurement },
				LogoId: req.params.brand
			},
		    include: [db.Logos]
		}).then(function(dbSizes) {
			res.json(dbSizes);
		});
	});

	app.get("/api/sizes/:gender/:measurement", function(req, res) {
		console.log("no brand\n------------");
		console.log(req.params);
		checkUser(req, req.params.gender, req.params.measurement);
		db.Sizes.findAll({
			where: {
				gender: req.params.gender,
				inchMin: { [Op.lte]: req.params.measurement },
				inchMax: { [Op.gte]: req.params.measurement }
			},
		    include: [db.Logos]
		}).then(function(dbSizes) {
			res.json(dbSizes);
		});
	});

	var checkUser = function(req, gender, measurement) {
		if(req.user){
			db.Users.update(
				{ gender: gender, measurement: measurement },
				{ where: { id: req.user.id } }
			).then(function(dbUsers) {
				console.log("dbUsers below");
				console.log(dbUsers);
				return dbUsers;
			});
		}
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