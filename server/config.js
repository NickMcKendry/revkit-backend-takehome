const environment = 'development';
const config = require('../knexfile')
const pg = require('knex')(config[environment])

module.exports = pg
