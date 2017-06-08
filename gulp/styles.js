'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('./config');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src(config.source.sassMain)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest.css);
});

gulp.task('sass:watch', function () {
  gulp.watch(config.source.sassFolder, ['sass']);
});
