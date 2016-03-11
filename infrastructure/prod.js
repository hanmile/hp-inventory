var _ = require('lodash');
var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prod = { name: 'hp-inventory-service',
    config_vars: { NODE_ENV: 'prod', MONGOLAB_URI: 'mongodb://heroku_2vdfpn69:4a07gvlcuul7p1u7cabkk4jld5@ds041494.mlab.com:41494/heroku_2vdfpn69' },
    domains: [ 'hp-inventory-service.herokuapp.com' ] };

var config = _.merge({}, require('./base'), prod);

configurator(config);
