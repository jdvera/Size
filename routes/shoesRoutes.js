var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/shoes/:gender/:measurement/:brand", function(req, res) {
		console.log("Shoes, included brand\n------------");
		console.log(req.params);
		var userObj = checkUser(req, req.params.gender, req.params.measurement);
		db.Shoes.findOne({
			where: {
				gender: req.params.gender,
				shoeMin: { [Op.lt]: req.params.measurement },
				shoeMax: { [Op.gte]: req.params.measurement },
				LogoId: req.params.brand
			},
		    include: [db.Logos]
		}).then(function(dbShoes) {
			res.json(dbShoes);
		});
	});

	app.get("/api/shoes/:gender/:measurement", function(req, res) {
		console.log("Shoes, no brand\n------------");
		console.log(req.params);
		var userObj = checkUser(req, req.params.gender, req.params.measurement);
		db.Shoes.findAll({
			where: {
				gender: req.params.gender,
				shoeMin: { [Op.lt]: req.params.measurement },
				shoeMax: { [Op.gte]: req.params.measurement }
			},
		    include: [db.Logos]
		}).then(function(dbShoes) {
			res.json(dbShoes);
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
	// 	db.Shoes.findOne({ where: { brand: req.body.brand, size: req.body.size } }).then(function(response) {
	// 		if(!user) {
	// 			db.Shoes.create(req.body).then(function(dbShoes) {
	// 				res.json(dbShoes);
	// 			});
	// 		}
	// 		else {
	// 			res.send(false);
	// 		}
	// 	});
	// });
};