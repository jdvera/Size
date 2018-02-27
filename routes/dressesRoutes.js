var db = require("../models");
var Sequelize = require('sequelize');

module.exports = function(app) {
	var Op = Sequelize.Op;

	app.get("/api/dresses/:bust/:waist/:hips/:brand", function(req, res) {
		console.log("Dresses, included brand\n------------");
		console.log(req.params);
		var userObj = checkUser(req, req.params.bust, req.params.waist, req.params.hips);
		db.Dresses.findOne({
			where: {
				bust: { [Op.gte]: req.params.bust },
				waist: { [Op.gte]: req.params.waist },
				hips: { [Op.gte]: req.params.hips },
				LogoId: req.params.brand
			},
		    include: [db.Logos]
		}).then(function(dbDresses) {
			res.json(dbDresses);
		});
	});

	app.get("/api/dresses/:bust/:waist/:hips", function(req, res) {
		console.log("Dresses, no brand\n------------");
		console.log(req.params);
		var userObj = checkUser(req, req.params.bust, req.params.waist, req.params.hips);
		var userArr = [];
		var i = 14;
		dressSearch(res, i, req.params.bust, req.params.waist, req.params.hips, userArr);
	});

	var checkUser = function(req, bust, waist, hips) {
		if(req.user){
			db.Users.update(
				{ bust: bust, waist: waist, hips: hips },
				{ where: { id: req.user.id } }
			).then(function(dbUsers) {
				console.log("dbUsers below");
				console.log(dbUsers);
				return dbUsers;
			});
		}
	}

	var dressSearch = function(res, i, bust, waist, hips, userArr) {
		db.Dresses.findOne({
			where: {
				bust: { [Op.gte]: bust },
				waist: { [Op.gte]: waist },
				hips: { [Op.gte]: hips },
				LogoId: i
			},
		    include: [db.Logos]
		}).then(function(dbDresses) {
			if(userArr.length == 7){
				console.log(userArr);
				res.json(userArr);
			}
			else {
				userArr.push(dbDresses);
				i++;
				dressSearch(res, i, bust, waist, hips, userArr)
			}
		});
	}
};   


