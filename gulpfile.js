var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config.js')();

var $ = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {

    log('analyzing source with jshint and jscs');

    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));


});

gulp.task('styles', function() {
    log('Compiling less ---> to css');
    return gulp.src(config.less)
        .pipe($.less())
        .pipe($.autoprefixer({browsers:  ['last 2 version', '> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function() {

    var files = config.temp + '**/*.css';
    del(files);

});


///////////////////////
function log(msg) {
    if (typeof(msg) === 'object' ) {
        for (var item in msg) {
            if (msg.hasOwnProperty('item')) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }

}
