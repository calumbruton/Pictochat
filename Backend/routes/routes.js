const accountService = require('../services/account-service')

module.exports = function addRoutes(app, db) {
    app.get('/users', function(req, res) {
        const options = {
            attributes: [
                'email',
                'password'
            ]
        };
        db.account.findAll(options).then(function(result) {
            res.json(result);
        })
    })
    // app.get('/users/:email', db.getUserByEmail)
    // app.get('/users/:email/:password', db.authenticateUser)
    // app.post('/users', db.createUser)
    // app.put('/users/:email', db.updateUser)
    // app.delete('/users/:email', db.deleteUser)
};