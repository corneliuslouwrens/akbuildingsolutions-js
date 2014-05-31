'use strict';

// include gulp
var gulp = require('gulp');

// include plug-ins
var jshint         = require('gulp-jshint'),
    changed        = require('gulp-changed'),
    imagemin       = require('gulp-imagemin'),
    minifyHTML     = require('gulp-minify-html'),
    concat         = require('gulp-concat'),
    stripDebug     = require('gulp-strip-debug'),
    uglify         = require('gulp-uglify'),
    autoprefix     = require('gulp-autoprefixer'),
    minifyCSS      = require('gulp-minify-css'),
    clean          = require('gulp-clean');

// js hint task
gulp.task('jshint', function() {
  gulp.src([
    'server.js',
    'routes.js',
    'logger.js',
    './public/src/**/*.js',
    '!./public/src/lib/**/*.js'
  ]).pipe(jshint()).pipe(jshint.reporter('default'));
});

// minify new images task
gulp.task('imagemin', function() {
  var imgSrc = './public/img/**/*',
      imgDst = './build/img';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// js concat, strip debugging and minify backbone files task
gulp.task('backboneScripts', function() {
  gulp.src(['./public/src/**/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/src/'));

  // vendor files
  gulp.src('./public/vendor/**')
    .pipe(gulp.dest('build/vendor'));
});

// js concat, strip debugging and minify library files task
gulp.task('libScripts', function() {
  gulp.src(['./public/lib/*.js'])
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/lib/'));
});

// minify new or changed html template task
gulp.task('htmlTemplates', function() {
  var htmlSrc = './public/src/templates/*.html',
      htmlDst = './build/src/templates';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// css concat, auto-prefix and minify
gulp.task('css', function() {
  gulp.src(['./public/css/**/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'));
});

// default task
gulp.task('default', ['backboneScripts', 'libScripts', 'htmlTemplates', 'css', 'imagemin'], function() {});

// clean task
gulp.task('clean', function() {
  gulp.src('build')
    .pipe(clean());
});
