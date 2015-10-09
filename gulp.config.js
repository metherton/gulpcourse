module.exports = function() {

    var client = './src/client/';
    // all js to vet
    var config = {
        temp: './.tmp',

        /**
         * filepaths
         *
         * **/
        alljs: ['./src/**/*.js',
            './*.js'],
        less: client + 'styles/styles.less'
    };

    return config;
};
