var config = require('config-env').define('ENV', function(config) {
    config.common({
        name: 'peermocha'
    });

    config.config('local', {
        mongo_uri: 'mongodb://localhost:27017/dev_peermocha',
        static_path: '/website/build',
        port: 3003
    });

    config.config('dev', {
        mongo_uri: 'mongodb://localhost:27017/dev_peermocha',
        static_path: '/website/build',
        port: 3003
    });

    config.config('prod', {
        mongo_uri: 'mongodb://localhost:27017/dev_peermocha',
        static_path: '/website/bin',
        port: 80
    });
});

module.exports = config