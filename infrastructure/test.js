var _ = require('lodash');
var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var test = { name: 'hp-inventory-service-test',
    config_vars: { NODE_ENV: 'test'},
    domains: [ 'hp-inventory-service-test.herokuapp.com' ] };

var config = _.merge({}, require('./base'), test);

configurator(config);