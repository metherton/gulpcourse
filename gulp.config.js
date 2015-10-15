module.exports = function() {

    var client = './src/client/';
    var server = './src/server/';
    var clientApp = client +  'app/';
    var temp = './.tmp/';
    // all js to vet
    var config = {
        /**
         * filepaths
         *
         * **/
        alljs: ['./src/**/*.js',
            './*.js'],

        index: client + 'index.html',
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        htmltemplates: clientApp + '**/*.html',
        html: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
        server: server,
        temp: temp,

        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        browserReloadDelay: 1000,
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },

        defaultPort: 7203,
        nodeServer: './src/server/app.js'
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
