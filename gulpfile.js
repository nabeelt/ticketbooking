var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('inject', function () {
  var target = gulp.src('./index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./bower_components/angular/angular.min.js',
							'./bower_components/angular-ui-router/release/angular-ui-router.min.js',
							'./app/js/**/*.js','./app/js/*.js','./app/js/**/*.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./tmp'));
});