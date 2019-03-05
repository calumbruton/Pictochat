const accountService = require('../services/account-service')

module.exports = function addRoutes(app, db) {
    app.get('/users', (req, res) => accountService.getAccounts(req, res))
    // app.get('/users/:email', db.getUserByEmail)
    app.get('/users/:email/:password', (req, res) => accountService.authenticateAccount(req, res))
    // app.post('/users', db.createUser)
    // app.put('/users/:email', db.updateUser)
    // app.delete('/users/:email', db.deleteUser)
};