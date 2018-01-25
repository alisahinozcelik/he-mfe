var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var minifyCSS = require('gulp-minify-css');

var server = lr();

gulp.task('scripts', function() {
    gulp.src(['app/src/**/*.js'])
        .pipe(browserify())
        .pipe(concat('dest.js'))
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(server))
})

gulp.task('styles', function() {
    gulp.src(['app/css/style.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/build'))
        .pipe(refresh(server))
})

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})