var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/shoes/:gender/:shoe/:brand", function(req, res) {
		console.log("Shoes, included brand\n------------");
		console.log(req.params);
		var userObj = saveShoe(req, req.params.gender, req.params.shoe);
		db.Shoes.findOne({
			where: {
				gender: req.params.gender,
				shoeMin: { [Op.lt]: req.params.shoe },
				shoeMax: { [Op.gte]: req.params.shoe },
				LogoId: req.params.brand
			},
		    include: [db.Logos]
		}).then(function(dbShoes) {
			res.json(dbShoes);
		});
	});

	app.get("/api/shoes/:gender/:shoe", function(req, res) {
		console.log("Shoes, no brand\n------------");
		console.log(req.params);
		var userObj = saveShoe(req, req.params.gender, req.params.shoe );
		db.Shoes.findAll({
			where: {
				gender: req.params.gender,
				shoeMin: { [Op.lt]: req.params.shoe },
				shoeMax: { [Op.gte]: req.params.shoe }
			},
		    include: [db.Logos]
		}).then(function(dbShoes) {
			res.json(dbShoes);
		}).catch(err => console.log(err));
	});

	var saveShoe = function(req, gender, shoe) {
		if(req.user){
			console.log("ATTEMPTING TO SAVE SHOE DATA!")
			db.Users.update(
				{ gender: gender, shoe: shoe },
				{ where: { id: req.user.id } }
			).then(function(dbUsers) {
				console.log("dbUsers below");
				console.log(dbUsers);
				return dbUsers;
			});
		}
	};

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