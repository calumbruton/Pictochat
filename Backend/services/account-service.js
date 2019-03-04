const db = require('../models')

function getAccounts(){ 
    return db.account.findAll({})
}

module.exports = {
    getAccounts
}