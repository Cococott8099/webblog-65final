const UserController = require('./controllers/UserController')

const CoffeeController = require('./controllers/CoffeerController')

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', UserController.index)
    
    app.post('/coffee', CoffeeController.create)
    app.put('/coffee/:coffeeId', CoffeeController.put)
    app.delete('/coffee/:coffeeId', CoffeeController.remove)
    app.get('/coffee/:coffeeId', CoffeeController.show)
    app.get('/coffees', CoffeeController.index)
}