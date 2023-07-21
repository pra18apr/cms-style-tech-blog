const { User } = require('../models');
const bcrypt = require('bcrypt');
const password = 'password'
const hash = bcrypt.hashSync(password, 10);

const userData = [
    {
        username: 'Pradeep',
        password: hash
    },
    {
        username: 'Nimit',
        password: hash
    },
    {
        username: 'Luca',
        password: hash
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;