const router = require('express').Router()
const RestaurantController = require('../controllers/restaurant.controller')


router.get('/', RestaurantController.getAllRestaurant)
router.get('/getbyzipcode', RestaurantController.getRestaurantByZipCode )
router.get('/getbynation', RestaurantController.getRestaurantByNation)

module.exports = router