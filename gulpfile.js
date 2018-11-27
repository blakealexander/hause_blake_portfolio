
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie11'}))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('animateCss', function () {
    return gulp.src('node_modules/animate.css/animate.min.css')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

gulp.task('wowJs', function () {
  return gulp.src('node_modules/wowjs/dist/wow.min.js')
    .pipe(gulp.dest('./js'));
});

gulp.task('frameworkJs', function () {
  return gulp.src('node_modules/foundation-sites/dist/js/**.*')
    .pipe(gulp.dest('./js/foundation/'));
});

gulp.task('framework', function () {
  return gulp.src('node_modules/foundation-sites/dist/css/foundation.min.css')
    .pipe(gulp.dest('./css'));
});

gulp.task('default',['wowJs', 'sass', 'framework', 'frameworkJs', 'animateCss']);
