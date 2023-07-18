const { client, databaseFunction } = require('../database')

class RestaurantController {
    async getAllRestaurant(req, res) {
        try {
            const result = await databaseFunction().find().toArray()
            return res.status(200).json({ restaurants: result })
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }

    async getRestaurantByZipCode(req, res) {
        try {
            const result = await databaseFunction().find({"address.zipcode": "11209"}).toArray()
            return res.status(200).json({ restaurants: result })
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }

    async getRestaurantByNation(req, res) {
        try {
            const result = await databaseFunction({cuisine: "American"}).find().toArray()
            return res.status(200).json({ restaurants: result })
        } catch (error) {
            return res.status(500).json({ error: 'Internal Server Error' })
        }
    }
}

module.exports = new RestaurantController()
