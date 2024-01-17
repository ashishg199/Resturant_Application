const express = require('express');

var CitylistController = require('../controller/city.js');
var RestaurantsController = require('../controller/restaurant.js')
var mealtypeController = require('../controller/mealtype.js')

const router = express.Router();

router.get('/getCityList', CitylistController.getCityList);
router.get('/getRestaurantsByCityName/:cityname', RestaurantsController.getRestaurantsByCityName);
router.get('/widget', mealtypeController.widget);

module.exports = router;

