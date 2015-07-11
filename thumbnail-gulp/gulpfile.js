var gulp = require('gulp');
//Build Process
var gutil = require('gulp-util');
// Console Logging out from build process
var source = require('vinyl-source-stream');
// Handles text files from one part of build process to another
var browserify = require('browserify');
//
var watchify = require('watchify');
// Auto rerun gulpfile when code changes
var reactify = require('reactify');
// converts JSX to JS

gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };
  build()
  bundler.on('update', build)
});


