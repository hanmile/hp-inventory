var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

/*configurator.export('hp-inventory-service').then(function(result) {
    console.log(result);
});*/


var prod = { name: 'hp-inventory-service',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { NODE_ENV: 'prod', MONGOLAB_URI: 'mongodb://heroku_2vdfpn69:4a07gvlcuul7p1u7cabkk4jld5@ds041494.mlab.com:41494/heroku_2vdfpn69' },
    addons: { mongolab: { plan: 'mongolab:sandbox' } },
    collaborators: [ 'britt.bugge@schibsted.no', 'hans.petter.mile@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'hp-inventory-service.herokuapp.com' ] };

var test = { name: 'hp-inventory-service-test',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: { NODE_ENV: 'test'},
    addons: { mongolab: { plan: 'mongolab:sandbox' } },
    collaborators: [ 'britt.bugge@schibsted.no', 'hans.petter.mile@gmail.com' ],
    features:
    { 'runtime-dyno-metadata': { enabled: false },
        'log-runtime-metrics': { enabled: false },
        'http-session-affinity': { enabled: false },
        preboot: { enabled: false },
        'http-shard-header': { enabled: false },
        'http-end-to-end-continue': { enabled: false } },
    formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
    log_drains: [],
    domains: [ 'hp-inventory-service-test.herokuapp.com' ] };


configurator(test);