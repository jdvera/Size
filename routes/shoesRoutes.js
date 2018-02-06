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
			console.log("dbShoes is " + dbShoes);
			res.json(dbShoes);
		}).catch(err => console.log(err));
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
	};

	app.get("/api/profile", function(req, res) {
		console.log("sizeRoutes.js getting profile data");
		// if user logged in
		if (req.user) {
			console.log(req.user.dataValues.gender);
		 	db.Sizes.findAll({
		  			where: {
		  				gender: req.user.dataValues.gender,
		  				inchMin: { [Op.lte]: req.user.dataValues.measurement },
		  				inchMax: { [Op.gte]: req.user.dataValues.measurement }
		  			},
		  		    include: [db.Logos]
		  		}).then(function(dbSizes) {
					res.json(dbSizes); 
				})
	 	} else {
			console.log("user doesn't exist!");
			console.log(req.user);
			res.send(false);
		}	
	});




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