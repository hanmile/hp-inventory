var base = { region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
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
    log_drains: []
};

module.exports = base;