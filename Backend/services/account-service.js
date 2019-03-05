const db = require('../models')

function getAccounts(req, res){ 
    const options = {
        attributes: [
            'email',
            'password'
        ]
    };
    db.account.findAll(options).then(function(result) {
        res.json(result);
    });
};


function authenticateAccount(req, res){ 
    const options = {
        attributes: [
            'email',
            'password'
        ],
        where: {
            email: req.params.email,
            password: req.params.password
          }
    };
    db.account.findAll(options).then(function(result) {
        res.json(result);
    });
};

module.exports = {
    getAccounts,
    authenticateAccount
}