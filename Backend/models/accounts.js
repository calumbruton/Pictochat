module.exports = function(sequelize, DataTypes) { 
    const account = sequelize.define('account', {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false,
        schema: 'pictochat',
        tableName: 'accounts'
    });
    return account;
}

