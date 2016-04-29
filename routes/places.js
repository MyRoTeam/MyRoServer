const GooglePlaces = require('googleplaces');
const express = require('express');
const router = express.Router();

var places = new GooglePlaces(config.apiToken,"json");

var placeSearch = places.placeSearch;

router.get('/', function(req,res,next){

    var lat = req.query.lat;
    var lng = req.query.lng;
    var rad = req.query.radius;

    var parameters = {
      location: [lat,lng],
      radius : rad,
      types: "point_of_interest"
    };

    placeSearch(parameters, function(error,response){

        if(error) return next(error);

        var result = response.results;

        var landmarks = {

          landmarks : result

        };

        res.status(200).send(landmarks);

    });


});

module.exports = router;