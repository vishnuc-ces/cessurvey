var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mochaTest', function() {
    return gulp.src(['test/test-*.js'], {read: false})
        .pipe(mocha({reporter: 'list'}))
        .on('error', gutil.log);
  });

gulp.task('default', ['mochaTest'], function() {
    gulp.watch(['test/**'], ['mocha']);

    nodemon({
        script: 'server.js'
        , ext: 'js html'
      });
  });
